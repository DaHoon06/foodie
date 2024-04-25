"use client";

import {ReactElement, useEffect, useRef, useState} from "react";
import {getMarkerApi} from "@apis/shop/shop.api";
import {Skeleton} from "@components/ui/skeleton/Skeleton";
import {useAuth} from "@providers/AuthProvider";
import {prefetchingMarker} from "@services/queries/maps/useMarkerQuery";
import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@services/keys/queryKeys";

const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

export const KakaoMap = (): ReactElement => {
  const mapContainer = useRef();
  const [pending, setPending] = useState(true);
  const {userId, isLogin} = useAuth();

  useEffect(() => {
    prefetchingMarker(userId);
  }, []);

  const {data: mapData, isLoading} = useQuery(
    [queryKeys.maps.marker, userId],
    () => getMarkerApi(userId),
    {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
    }
  );

  useEffect(() => {
    setPending(true);
    const kakao: any = (window as any).kakao;
    kakao.maps.load(() => {
      const mapElement = document.getElementById("map");

      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        const options = {
          center: new kakao.maps.LatLng(lat, lon),
          level: 7,
        };
        const map = new kakao.maps.Map(mapElement, options);
        map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); // 교통 정보 삭제
        const locPosition = new kakao.maps.LatLng(lat, lon);

        if (mapData && mapData.length > 0) {
          const positions = mapData.map((value: any) => {
            const {x, y, title, shopId, fullAddress, sido, sigungu, category} = value;
            return {
              title,
              shopId,
              fullAddress,
              sido,
              sigungu, category,
              latlng: new kakao.maps.LatLng(+y, +x),
            };
          });

          const imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

          for (let i = 0; i < positions.length; i++) {
            const imageSize = new kakao.maps.Size(24, 35);
            const markerImage = new kakao.maps.MarkerImage(
              imageSrc,
              imageSize
            );

            const content = '<div class="wrap">' +
              '    <div class="info">' +
              '        <div class="title">' +
              `            <span >${positions[i].title}</span>` +
              '        </div>' +
              '        <div class="body">' +
              '            <div class="desc">' +
              `                <div class="ellipsis">${positions[i].fullAddress}</div>` +
              `                <div class="jibun ellipsis">${positions[i].category} / ${positions[i].sido} ${positions[i].sigungu}</div>` +
              '            </div>' +
              '        </div>' +
              '    </div>' +
              '</div>';

            const marker = new kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image: markerImage, // 마커 이미지
            });
            const {La, Ma} = marker.getPosition();
            const position = new kakao.maps.LatLng(Ma, La);
            const overlay = new kakao.maps.CustomOverlay({
              content: content,
              map: map,
              position: position,
            });

            overlay.setMap(null);

            kakao.maps.event.addListener(
              marker,
              "click",
              makeClickListener(map, overlay)
            );

            let isOpen = false;

            function makeClickListener(
              map: any,
              overlay: any
            ) {
              return function () {
                isOpen = !isOpen;
                if (isOpen) overlay.setMap(map);
                else overlay.setMap(null);
              };
            }
          }
        }
        setPending(false);
        map.setCenter(locPosition);
      });
    });
  }, [mapData, isLoading]);

  return (
    <>
      {<Skeleton isLoading={pending}/>}
      <div
        id={"map"}
        ref={mapContainer}
        style={{
          width: "100%",
          height: 300,
        }}
      />
    </>
  );
};
