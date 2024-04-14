"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import { getMarkerApi } from "@apis/shop/shop.api";
import { KakaoMarker } from "@interfaces/map/kakao";
import { Skeleton } from "@components/ui/skeleton/Skeleton";
import { useAuth } from "@providers/AuthProvider";

const kakaoAppKey = process.env.KAKAO_API_KEY;

export const KakaoMap = (): ReactElement => {
  const mapContainer = useRef();
  const [pending, setPending] = useState(true);
  const [mapData, setMapData] = useState<KakaoMarker[]>([]);
  const { userId, isLogin } = useAuth();

  const load = async () => {
    try {
      const data = await getMarkerApi(userId);
      if (data) setMapData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLogin && pending) load();
  }, [userId, isLogin]);

  useEffect(() => {
    setPending(true);
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoAppKey}&autoload=false`;
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
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

          if (mapData.length > 0) {
            const positions = mapData.map((value) => {
              const { x, y, title } = value;
              return {
                title,
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

              var infowindow = new kakao.maps.InfoWindow({
                content: `<div>${positions[i].title}</div>`, // 인포윈도우에 표시할 내용
              });

              const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
              });

              kakao.maps.event.addListener(
                marker,
                "mouseover",
                makeOverListener(map, marker, infowindow)
              );

              kakao.maps.event.addListener(
                marker,
                "mouseout",
                makeOutListener(infowindow)
              );

              function makeOverListener(
                map: any,
                marker: any,
                infowindow: any
              ) {
                return function () {
                  infowindow.open(map, marker);
                };
              }

              // 인포윈도우를 닫는 클로저를 만드는 함수입니다
              function makeOutListener(infowindow: any) {
                return function () {
                  infowindow.close();
                };
              }
            }
          }
          setPending(false);
          map.setCenter(locPosition);
        });
      });
    };

    return () => {
      const scripts = document.head.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        if (script.src && script.src.includes("dapi.kakao.com")) {
          script.parentNode.removeChild(script);
        }
      }
    };
  }, [mapContainer, mapData]);

  return (
    <>
      {<Skeleton isLoading={pending} />}
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
