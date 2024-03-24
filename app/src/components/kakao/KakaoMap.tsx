import {ReactElement, useEffect, useRef} from "react";

const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

export const KakaoMap = (): ReactElement => {
  const mapContainer = useRef();
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
            level: 3
          }
          const map = new kakao.maps.Map(mapElement, options);
          const locPosition = new kakao.maps.LatLng(lat, lon);
          new kakao.maps.Marker({
            map: map,
            position: locPosition
          });
          map.setCenter(locPosition);
        });
      })
    }
  }, [mapContainer])


  return (
    <div id={'map'} ref={mapContainer} style={{
      width: '100%',
      height: 300
    }}/>
  )
}
