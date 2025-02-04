import scss from "./Footer.module.scss";
import logo from "../../../assets/layoutAssets/Drile.png";
import socialMedia from "../../../assets/layoutAssets/Vector (5).png";
import socialMedia2 from "../../../assets/layoutAssets/Vector (6).png";
import socialMedia3 from "../../../assets/layoutAssets/Vector (7).png";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className={scss.footerBackground}>
        <img
          className={scss.backgroundImg}
          src="https://s3-alpha-sig.figma.com/img/d190/8910/9cfd4357639c5c15b38fc79289a6f31b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YyNarXpUGEEMbS11LRZhSj25yQTHO9shHi7kqqTRrp2AwazAjRkhADFZLi0P8lzrOgW0Yt1d~Uar3GGKIpE7d~jPeuwJfd5aE8VmKFeCpELeVdTNSw1X1d~ZqvG36Vk3zFaTDoVvznMxvzFjzyE471CxyXrWdbSWKuI-rJ6YIURkNyRixd1eid-0P-z06kcpHWz4uy6tL4U8GcpecQR2pbTsy7yAuDXd-apoAcSKm0ilKJpLyG7H00IU0L~euWF~j8R4LgKnocKj97~rXcu9VSw~cEJuV8-jpynm3I0tkWnddMERwdr8PNGvhmXgs0MNqZ6AJ64Jh2KWphQRrUZAyA__"
          alt=""
        />
        <div className="container">
          <div className={scss.content}>
            <img className={scss.logo} src={logo} alt="" />
            <div className={scss.footer}>
              <ul>
                <h2>ABOUT US</h2>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
              <ul>
                <h2>COMPANY</h2>
                <li>Explore World</li>
                <li>Trending Video</li>
                <li>Book a Trip</li>
                <li>Visit Gallery</li>
              </ul>
              <ul>
                <h2>USEFUL LINKS</h2>
                <li>Buy this theme</li>
                <li>Drile Landing</li>
                <li>Documentation y</li>
                <li>Video tutorial</li>
              </ul>
              <ul>
                <h2>FOLLOW US</h2>
                <div className={scss.socialMedia}>
                  <img src={socialMedia} alt="" />
                  <li>Facebook</li>
                </div>
                <div className={scss.socialMedia}>
                  <img src={socialMedia2} alt="" />
                  <li>Twitter</li>
                </div>
                <div className={scss.socialMedia}>
                  <img src={socialMedia3} alt="" />
                  <li>Instagram</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
