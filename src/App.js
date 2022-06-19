import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StartPage } from "./components/startPage";
import { WeatherPage } from "./components/weatherPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/weather" element={<WeatherPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
