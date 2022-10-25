import { useLocation } from "react-router-dom";
import qs from 'query-string'
export default function Page2() {
  const loc = useLocation().search; //useLocation 훅을 사용하면 전달된 쿼리스트링을 확인할 수 있음
  
  console.log(loc);

  const q = qs.parse(loc);  //쿼리스트링 부분을 오브젝트로 변환시켜줌
  console.log(q)

  // let loc2 = loc.replace('?', '').split('&')
  // loc2 = loc2.map((m) => m.split('=)[1]'))
  // console.log(loc2)
  return(
    <>
      <h1>page2</h1>
      {Object.keys(q).length === 0 ? "전달자료없음" : <h2>{q.item}({q.item2})</h2>}
    </>
  );
};