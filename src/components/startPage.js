import "./startPage.scss";
import { Link } from "react-router-dom";
import { WiSunset, WiSolarEclipse } from "react-icons/wi";

export const StartPage = () => {
  return (
    <>
      <div className="start_wrap">
        <div className="start_container">
          <h1>Thời tiết</h1>

          <WiSolarEclipse className="icon" />

          <Link className="start_link" to="/weather">
            <button>
              <h2>BẮT ĐẦU</h2>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
