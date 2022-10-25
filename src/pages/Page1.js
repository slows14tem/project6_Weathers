import { useParams } from "react-router-dom";
export default function Page1() {
  const pm = useParams().item;

  return(
    <>
      <h1>page1</h1>
      <h2>{pm === 'p'?"전달자료 없음":pm}</h2>
    </>

  );
};