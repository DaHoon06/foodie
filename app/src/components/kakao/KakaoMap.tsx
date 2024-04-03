import {ReactElement, useEffect, useRef, useState} from "react";
import {getMarkerApi} from "@apis/shop/shop";
import {useSession} from "next-auth/react";
import {User} from "@containers/HomeContainer";

const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

interface Marker {
  _id: string;
  title: string;
  x: string;
  y: string;
}

export const KakaoMap = (): ReactElement => {
  const mapContainer = useRef();
  const [mapData, setMapData] = useState<Marker[]>([]);
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (sessionData) load();
  }, [sessionData]);
  const load  = async () => {
    const session = sessionData as unknown as User;
    const creatorId = session.id;
    const {data} = await getMarkerApi(creatorId);
    if (data) setMapData(data.data)
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoAppKey}&autoload=false`;
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const kakao: any = (window as any).kakao;
      kakao.maps.load(() => {
        const mapElement = document.getElementById('map');

          navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
            const options = {
              center: new kakao.maps.LatLng(lat, lon),
              level: 5
            }
            const map = new kakao.maps.Map(mapElement, options);
            const locPosition = new kakao.maps.LatLng(lat, lon);

            if (mapData.length > 0) {
              const positions = mapData.map((value) => {
                const {x, y, title} = value;
                return {
                  title,
                  latlng: new kakao.maps.LatLng(+y, +x)
                }
              })

              const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

              for (let i = 0; i < positions.length; i++) {
                const imageSize = new kakao.maps.Size(24, 35);
                const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                new kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position: positions[i].latlng, // 마커를 표시할 위치
                  title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  image: markerImage // 마커 이미지
                });
              }
            }
            new kakao.maps.Marker({
              map: map,
              position: locPosition
            });
            map.setCenter(locPosition)
          });

      })
    }
  }, [mapContainer, mapData])


  return (
    <div id={'map'} ref={mapContainer} style={{
      width: '100%',
      height: 300
    }}/>
  )
}
