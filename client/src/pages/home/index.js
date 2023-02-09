import Banners from "../../componets/Banners";
import Category from "../../componets/Category";
import Footer from "../../componets/Footer";

import Products from "../../componets/Products";
import "./home.css";

function Home() {
  return (
    <div>
      <Banners />
      <Category />
      <Products product_title="Shoes" />
      <Products product_title="Bagpack" />
      <Footer />
    </div>
  );
}

export default Home;
