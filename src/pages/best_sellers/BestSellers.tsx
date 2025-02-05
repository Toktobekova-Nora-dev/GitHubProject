import scss from "./BestSellers.module.scss";
import image1 from "../../assets/best-sellers-img-1.svg";
import { FaArrowRotateRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const BestSellers = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Best Seller Items</h1>
          <div className={scss.cards}>
            <div className={scss.card}>
              <div className={scss.hot}>
                <button>HOT</button>
                <button>-5%</button>
              </div>
              <img src={image1} alt="image" />
              <h3>Metal Vintage Pendant</h3>
              <p>$79.00</p>
              <div className={scss.icons}>
                <button>
                  <FaArrowRotateRight />
                </button>
                <button>
                  <CiHeart />
                </button>
                <button>
                  <HiOutlineShoppingCart />
                </button>
              </div>
            </div>

            <div className={scss.card}>
              <div className={scss.hot}>
                <button>HOT</button>
                <button>-5%</button>
              </div>
              <img src={image1} alt="image" />
              <h3>Metal Vintage Pendant</h3>
              <p>$79.00</p>
              <div className={scss.icons}>
                <button>
                  <FaArrowRotateRight />
                </button>
                <button>
                  <CiHeart />
                </button>
                <button>
                  <HiOutlineShoppingCart />
                </button>
              </div>
            </div>

            <div className={scss.card}>
              <div className={scss.hot}>
                <button>HOT</button>
                <button>-5%</button>
              </div>
              <img src={image1} alt="image" />
              <h3>Metal Vintage Pendant</h3>
              <p>$79.00</p>
              <div className={scss.icons}>
                <button>
                  <FaArrowRotateRight />
                </button>
                <button>
                  <CiHeart />
                </button>
                <button>
                  <HiOutlineShoppingCart />
                </button>
              </div>
            </div>

            <div className={scss.card}>
              <div className={scss.hot}>
                <button>HOT</button>
                <button>-5%</button>
              </div>
              <img src={image1} alt="image" />
              <h3>Metal Vintage Pendant</h3>
              <p>$79.00</p>
              <div className={scss.icons}>
                <button>
                  <FaArrowRotateRight />
                </button>
                <button>
                  <CiHeart />
                </button>
                <button>
                  <HiOutlineShoppingCart />
                </button>
              </div>
            </div>

            <div className={scss.card}>
              <div className={scss.hot}>
                <button>HOT</button>
                <button>-5%</button>
              </div>
              <img src={image1} alt="image" />
              <h3>Metal Vintage Pendant</h3>
              <p>$79.00</p>
              <div className={scss.icons}>
                <button>
                  <FaArrowRotateRight />
                </button>
                <button>
                  <CiHeart />
                </button>
                <button>
                  <HiOutlineShoppingCart />
                </button>
              </div>
            </div>

            <div className={scss.card}>
              <div className={scss.hot}>
                <button>HOT</button>
                <button>-5%</button>
              </div>
              <img src={image1} alt="image" />
              <h3>Metal Vintage Pendant</h3>
              <p>$79.00</p>
              <div className={scss.icons}>
                <button>
                  <FaArrowRotateRight />
                </button>
                <button>
                  <CiHeart />
                </button>
                <button>
                  <HiOutlineShoppingCart />
                </button>
              </div>
            </div>

            <div className={scss.card}>
              <div className={scss.hot}>
                <button>HOT</button>
                <button>-5%</button>
              </div>
              <img src={image1} alt="image" />
              <h3>Metal Vintage Pendant</h3>
              <p>$79.00</p>
              <div className={scss.icons}>
                <button>
                  <FaArrowRotateRight />
                </button>
                <button>
                  <CiHeart />
                </button>
                <button>
                  <HiOutlineShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
