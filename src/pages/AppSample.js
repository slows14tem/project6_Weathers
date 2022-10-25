import WeatherMain from "./com/WeatherMain";
import WeatherMain2 from "./com/WeatherMain2";
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Nav from "./pages/Nav";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/> {/* 루트페이지가 home이라고 만든 것 */}
        <Route path="/p1/:item" element={<Page1/>}/>
        <Route path="/p2" element={<Page2/>}/>
      </Routes>
    </>
  );
}

export default App;
