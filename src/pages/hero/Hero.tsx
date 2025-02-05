import scss from "./Hero.module.scss";
import heroImg from "../../assets/hero_img.svg";

const Hero = () => {
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <img src={heroImg} alt="img" />
          <div className={scss.right_content}>
            <h1>Get ready for Our stylist chair</h1>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
