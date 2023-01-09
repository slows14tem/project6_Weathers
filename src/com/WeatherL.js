import WeatherDay from "./WeatherDay";
import { Link } from "react-router-dom";
import { useState } from "react";
function WeatherMain() {
  //기본값이 3일 후인 useSatate변수 생성
  const [day, setDay] = useState(3);
  
  //버튼 클릭으로 날짜 변경
  const handelClick = (d) => {
    setDay(d);
    console.log(d);
  }

  return (
    <>
      <h1>날씨예보-중기정보</h1>
      <div className="forms">
        <form>
          <button onClick={(e) => { e.preventDefault(); handelClick(3); }}>3일후날씨</button>
          <button onClick={(e) => { e.preventDefault(); handelClick(4); }}>4일후날씨</button>
          <button onClick={(e) => { e.preventDefault(); handelClick(5); }}>5일후날씨</button>
          <button onClick={(e) => { e.preventDefault(); handelClick(6); }}>6일후날씨</button>
        </form>
      </div>
      {/* 해당 날짜의 강우량, 날씨예보 호출 */}
      <WeatherDay d={day} />      
      <button className='bt1'><Link to='/' className="line">홈으로</Link></button>
    </>
  );
}

export default WeatherMain;
