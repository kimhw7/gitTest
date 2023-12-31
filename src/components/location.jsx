import { useEffect, useRef } from "react";
import { styled } from "styled-components";

const { kakao } = window;

const Location = () => {
  const mapRef = useRef();
  var setMapType;

  //처음 지도 그리기
  useEffect(() => {
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

    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent =
      '<div style="padding:5px; width:100%; font-size:1.2rem"; display:flex; justify-content:center; align-items:center;>(주)인포필드</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseover", function () {
      // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseout", function () {
      // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
      infowindow.close();
    });

    // 스카이뷰 로직
    setMapType = (maptype) => {
      var roadmapControl = document.getElementById("btnRoadmap");
      var skyviewControl = document.getElementById("btnSkyview");
      if (maptype === "roadmap") {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        roadmapControl.className = "selected_btn";
        skyviewControl.className = "btn";
      } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        skyviewControl.className = "selected_btn";
        roadmapControl.className = "btn";
      }
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
      }}
      className="wrapper"
    >
      <Map id="map" ref={mapRef}>
        <div className="custom_typecontrol radius_border">
          <span
            id="btnRoadmap"
            className="btn selected_btn"
            onClick={() => setMapType("roadmap")}
          >
            지도
          </span>
          <span
            id="btnSkyview"
            className="btn line"
            onClick={() => {
              setMapType("skyview");
            }}
          >
            스카이뷰
          </span>
        </div>
      </Map>
      {/* 지도타입 컨트롤 div 입니다 */}
    </div>
  );
};

const Map = styled.div`
  z-index: 1;
  width: 99%;
  height: 500px;

  @media screen and (max-width: 767px) {
    height: 350px;
  }

  .custom_typecontrol {
    position: relative;
    left: 80%;
    top: 10%;
    z-index: 999;
    background-color: #f6f7f8;
    width: 130px;
    display: flex;
    justify-content: space-around;
    border: 1px solid #000000;
    height: 25px;
    border-radius: 5px;

    // 모바일
    @media screen and (max-width: 767px) {
      left: 50%;
    }

    .line {
      border-left: 1px solid #000000;
    }
    .btn,
    .selected_btn {
      &:hover {
        cursor: pointer;
      }
      font-size: 1.2rem;
      width: 50%;
      text-align: center;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .selected_btn {
      background-color: #5b6d8a;
      box-shadow: 3px gray inset;
      color: #f6f7f8;
    }
  }
`;

export default Location;
