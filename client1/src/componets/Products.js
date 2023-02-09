import { useEffect, useState } from "react";
import Cards from "./Cards";
import "./style.css";
import axios from "axios";

function Products({ product_title }) {
  const [products, setPoducts] = useState();
  useEffect(() => {
    axios.get("http://localhost:8001/get_all_product").then((result) => {
      const prod = result.data?.filter(
        (product) => product.category === product_title
      );
      console.log(prod);
      setPoducts(prod);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="product_title">
        <h3>{product_title}</h3>
      </div>
      <div className="product_cards">
        {products?.map((prods) => (
          <Cards product={prods} />
        ))}
      </div>
      <div className="product_cards"></div>
    </div>
  );
}

export default Products;
