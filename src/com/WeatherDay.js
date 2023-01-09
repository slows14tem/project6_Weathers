import db from '../db/weather.json' //중기 날씨 데이터
import './Weather.css'
export default function WeatherDay(props) {
  let weather = db.response.body.items.item;//만약 item의 배열이 한개짜리면 끝에 [0]이 붙어야 재대로 작동
  
  const d = props.d
  //props값에 따라 동적으로 필요한 항목을 선언
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Pm`];
  const ampm = ["오전 강수량", "오후 강수량", "오전 날씨예보", "오후 날씨예보"]

  // map을 사용한 방식
  // const items = [];
  // for(let k=0; k<keys.length;k++){
  //   items.push(<li className='no' key={keys[k]}><span className='day'>{d}일 후</span><span>{key2[k]}</span><span className='percen'>{weather[keys[k]]}</span></li>);
  // }

  //데이터를 출력하는 배열 생성
  const items2 = [];
  for(let k of keys){
    //isNaN = 매개변수가 숫자인지 검사하는 함수
    if(!isNaN(weather[k])) items2.push(weather[k] + '%')
    else items2.push(weather[k])    
  }
  console.log(items2)
  return (
    <>
      <ul>
        {/* {items} */}
        <li className='no'><span className='day'>{d}일 후</span><span>{ampm[0]}</span><span className='percen'>{items2[0]}</span></li>
        <li className='no'><span className='day'>{d}일 후</span><span>{ampm[1]}</span><span className='percen'>{items2[1]}</span></li>
        <li className='no'><span className='day'>{d}일 후</span><span>{ampm[2]}</span><span className='percen'>{items2[2]}</span></li>
        <li className='no'><span className='day'>{d}일 후</span><span>{ampm[3]}</span><span className='percen'>{items2[3]}</span></li>
      </ul>
    </>
  );
}