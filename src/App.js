import WeatherL from "./com/WeatherL";
import WeatherS from "./com/WeatherS";
import WeatherMain from "./com/WeatherMain";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WeatherMain/>}/> {/* 루트페이지가 home이라고 만든 것 */}
        <Route path="/p1" element={<WeatherS/>}/>
        <Route path="/p2" element={<WeatherL/>}/>
      </Routes>
    </>
  );
}

export default App;
