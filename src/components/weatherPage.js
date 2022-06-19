import "./weatherPage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { WiSolarEclipse } from "react-icons/wi";
import { MdArrowBackIosNew } from "react-icons/md";

const BASE_URL = "http://api.weatherapi.com/v1";
const KEY_API = "3ba7a6237cca49efa4481333221906";

export const WeatherPage = () => {
  const [address, setAddress] = useState("");
  const [submit, setSubmit] = useState("");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (!address.trim()) {
      return;
    }
    const getAPI = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/current.json?key=${KEY_API}&q=${encodeURIComponent(
            submit
          )}&lang=vi/`
        );

        setWeather(res.data);
        // console.log(res.data);
        setAddress("");
      } catch (error) {
        console.log(error.message);
      }
    };
    getAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit]);

  const handleChangeAddress = (e) => {
    const addressVl = e.target.value;
    setAddress(addressVl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit(address);
  };

  return (
    <>
      <div className="weather_wrap">
        <Link to="/">
          <div className="back_wrap">
            <MdArrowBackIosNew className="backIcon" />
          </div>
        </Link>
        <div className="weather_container">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChangeAddress}
              value={address}
              type="text"
              name="weather"
              placeholder="Nhập quốc gia/ tỉnh/ thành phố..."
            />
          </form>

          {submit ? (
            <div className="weather_body">
              <WiSolarEclipse className="iconSunWeather" />

              <h2>{weather?.location?.name}</h2>
              <p>{weather?.location?.country}</p>
              <h3>
                {weather?.current?.temp_c} <sup>o</sup>C
              </h3>
              <h4>{weather?.current?.condition?.text}</h4>
              <div className="weather_icon">
                <img
                  className="icon"
                  src={weather?.current?.condition?.icon}
                  alt="weather"
                />
              </div>
              <h5>
                {weather?.current?.temp_f} <sup>o</sup>F
              </h5>
              <div className="footer">
                <div className="item">
                  <h4>Mưa rào</h4>
                  <p>{weather?.current?.precip_mm} mm</p>
                </div>
                <div className="item">
                  <h4>Độ ẩm</h4>
                  <p>{weather?.current?.humidity}%</p>
                </div>
                <div className="item">
                  <h4>UV</h4>
                  <p>{weather?.current?.uv}</p>
                </div>
                <div className="item">
                  <h4>Mây</h4>
                  <p>{weather?.current?.cloud}%</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="noAddress">
              <h3>Nhập tên nơi mà bạn muốn xem thời tiết ...</h3>
              <WiSolarEclipse className="sunIcon" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
