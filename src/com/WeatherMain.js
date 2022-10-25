import { Link } from "react-router-dom";
export default function WeatherMain() {
  return (
    <>
      <h1>일기예보</h1>
      <div>
        <div className="p1"><Link to='/p1?base_date=202210' className="line">단기예보</Link></div>
        <div className="p2"><Link to='/p2?tmFc=202210' className="line">장기예보</Link></div>
      </div>
    </>
  );
};