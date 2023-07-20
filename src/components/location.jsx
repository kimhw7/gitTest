import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const { kakao } = window;

const Location = () => {
  //   const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    // const container = document.getElementById("map");
    // const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    // const kakaoMap = new kakao.maps.Map(container, options);
    // setMap(kakaoMap);

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.483522615928635, 126.88101064656342), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      37.483522615928635,
      126.88101064656342
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <Map id="map"></Map>
    </div>
  );
};

const Map = styled.div`
  width: 99%;
  height: 500px;

  @media screen and (max-width: 767px) {
    height: 350px;
  }
`;

export default Location;
