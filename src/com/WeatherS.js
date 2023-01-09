import db from '../db/weather2.json'  //단기 날씨 데이터
import dbV from '../db/item.json' //카테고리 이름 및 단위
import { Link } from "react-router-dom";
import './Weather.css'
export default function WeatherMain2(){

  //데이터 불러오기
  let weathers = db.response.body.items.item;

  //데이터의 값 변경
  const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
  const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };

  //Object.entries 방법
  // const lis = Object.entries(weathers.map((m) => 
  //   <li key={m[1].category}>{dbV[m[1].category][0]} {m[1].fcstValue} {dbV[m[1].category][1]}</li>  //map함수는 배열만 가능
  // )
  // const weather = Object.entries(weathers);

  //map (데이터가 배열이라서 Object.entries 사용 안해도 됨)
  // let items = weathers.map((k) =>
  //   (k.category === "PTY")
  //   ?<div key={k.category}><span>{dbV[k.category][0]}</span><span>{pty[k.fcstValue]}</span></div>
  //   :(k.category === "SKY")
  //   ?<div key={k.category}><span>{dbV[k.category][0]}</span><span>{sky[k.fcstValue]}</span></div>
  //   :<div key={k.category}><span>{dbV[k.category][0]}</span><span>{k.fcstValue} {dbV[k.category][1]}</span></div>
  // )

  //카테고리와 값을 출력하는 <div> 배열 생성
  let items = []
  for(let k of weathers){
    if (k.category === "PTY"){
      items.push(
      <div className='parts' key={k.category}>
        <span className='mvliK'>{dbV[k.category][0]}</span>
        <span className='mvliV'>{pty[k.fcstValue]}</span>
      </div>
      );  
    }
    else if(k.category === "SKY"){
      items.push(
      <div className='parts' key={k.category}>
        <span className='mvliK'>{dbV[k.category][0]}</span>
        <span className='mvliV'>{sky[k.fcstValue]}</span>
      </div>
      );  
    }
    else{
      items.push(
      <div className='parts' key={k.category}>
        <span className='mvliK'>{dbV[k.category][0]}</span>
        <span className='mvliV'>{k.fcstValue} {dbV[k.category][1]}</span>
      </div>
      );
    }    
  }

  return(
    <>
      <h1>날씨예보-단기정보</h1>
      <div className='short'>
        {items}
      </div>
      <button className='bt1'><Link to ='/' className="line">홈으로</Link></button>
    </>
  );
};