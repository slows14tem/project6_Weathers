//a테그 아니고 link테크 씀
import { Link } from "react-router-dom";
export default function Nav() {

  return(
    <>
      <ul>
        <li><Link to='/'>홈으로</Link></li>
        <li><Link to='/p1/p'>page1</Link></li>
        <li><Link to='/p2'>page2</Link></li>
      </ul>
    </>

  );
};