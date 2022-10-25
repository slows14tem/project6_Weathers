import WeatherDay from "./WeatherDay";
import { Link } from "react-router-dom";
import { useState } from "react";
function WeatherMain() {
  const [day, setDay] = useState(3);
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
      <WeatherDay d={day} />
      <button className='bt1'><Link to='/' className="line">홈으로</Link></button>
    </>
  );
}

export default WeatherMain;
