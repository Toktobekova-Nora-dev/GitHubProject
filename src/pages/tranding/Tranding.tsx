import scss from "./Tranding.module.scss";
import s from "../../assets/momo.png";
import s1 from "../../assets/lamp.png";
import s2 from "../../assets/Vector.png";
import s3 from "../../assets/Group.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/Vlast.png";
import arm from "../../assets/arm Chair.png";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { HiThumbUp } from "react-icons/hi";
import { HiArchiveBox } from "react-icons/hi2";
const Tranding = () => {
  return (
    <div className={scss.Tranding}>
      <div className="container">
        <div className={scss.TrandingOne}>
          <h1>TRENDING CATEGORIES"</h1>
          <div className={scss.box}>
            <div className={scss.boxer}>
              <img src={s} alt="img" />
              <p>DRESSING TABLE</p>
            </div>
            <div className={scss.boxer}>
              <img src={s1} alt="img" />
              <p>LAMP</p>
            </div>
            <div className={scss.boxer}>
              <img src={s2} alt="img" />
              <p>CABINET</p>
            </div>
            <div className={scss.boxer}>
              <img src={s3} alt="img" />
              <p>SOFA</p>
            </div>
            <div className={scss.boxer}>
              <img src={s4} alt="img" />
              <p>CHAIRE</p>
            </div>
            <div className={scss.boxer}>
              <img src={s5} alt="img" />
              <p>BED</p>
            </div>
          </div>
        </div>
        <div className={scss.cart}>
          <div className={scss.bord}>
            <img src={arm} alt="img" />
            <h3>Vasagle Vanity Table</h3>
            <p> $1,200.00</p>
            <div className={scss.learn}>
              <div className={scss.icon}>
                {" "}
                <HiOutlineSwitchHorizontal />
              </div>
              <div className={scss.icon}>
                {" "}
                <HiThumbUp />
              </div>
              <div className={scss.icon}>
                {" "}
                <HiArchiveBox />
              </div>
            </div>
          </div>
          <div className={scss.bord}>
            <img src={arm} alt="img" />
            <h3>Vasagle Vanity Table</h3>
            <p> $1,200.00</p>
            <div className={scss.learn}>
              <div className={scss.icon}>
                {" "}
                <HiOutlineSwitchHorizontal />
              </div>
              <div className={scss.icon}>
                {" "}
                <HiThumbUp />
              </div>
              <div className={scss.icon}>
                {" "}
                <HiArchiveBox />
              </div>
            </div>
          </div>
          <div className={scss.bord}>
            <img src={arm} alt="img" />
            <h3>Vasagle Vanity Table</h3>
            <p> $1,200.00</p>
            <div className={scss.learn}>
              <div className={scss.icon}>
                {" "}
                <HiOutlineSwitchHorizontal />
              </div>
              <div className={scss.icon}>
                {" "}
                <HiThumbUp />
              </div>
              <div className={scss.icon}>
                {" "}
                <HiArchiveBox />
              </div>
            </div>
          </div>
          <div className={scss.bord}>
            <img src={arm} alt="img" />
            <h3>Vasagle Vanity Table</h3>
            <p> $1,200.00</p>
            <div className={scss.learn}>
              <div className={scss.icon}>
                {" "}
                <HiOutlineSwitchHorizontal />
              </div>
              <div className={scss.icon}>
                {" "}
                <HiThumbUp />
              </div>
              <div className={scss.icon}>
                {" "}
                <HiArchiveBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tranding;
