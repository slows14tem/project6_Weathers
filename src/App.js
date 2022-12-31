import WeatherL from "./com/WeatherL";
import WeatherS from "./com/WeatherS";
import WeatherMain from "./com/WeatherMain";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WeatherMain/>}/>
        <Route path="/p1" element={<WeatherS/>}/>
        <Route path="/p2" element={<WeatherL/>}/>
      </Routes>
    </>
  );
}

export default App;
