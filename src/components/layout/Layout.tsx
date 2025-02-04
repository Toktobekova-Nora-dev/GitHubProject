import Tranding from "../../pages/tranding/Tranding";
import Footer from "./Footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <main>
        <Tranding />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

//ар биринер pages ичине папка ачасынар анан mainге кошосунар удачи!
//sass кочургом
