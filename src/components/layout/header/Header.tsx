import scss from "./Header.module.scss";
import logo from "../../../assets/layoutAssets/Drile.png";
import icon1 from "../../../assets/layoutAssets/Vector (3).png";
import icon2 from "../../../assets/layoutAssets/Group (3).png";
import icon3 from "../../../assets/layoutAssets/Vector (4).png";

const Header = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <img src={logo} alt="" />
          <div className={scss.nav}>
            <a href="">Home </a>
            <a href="">Shop </a>
            <a href="">Product</a>
            <a href="">Blog </a>
            <a href="">Page</a>
            <a href="">Contact</a>
          </div>
          <div className={scss.actions}>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
