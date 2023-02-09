import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeData } from "../redux/action";
import Swal from "sweetalert2";

function Cards({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    let { data } = await axios.get(
      `http://localhost:8001/get_product_id/${product.id}`
    );
    dispatch(storeData(data));

    let existingObjects = localStorage.getItem("CART");
    existingObjects = existingObjects ? JSON.parse(existingObjects) : [];
    existingObjects.push(data);
    localStorage.setItem("CART", JSON.stringify(existingObjects));
    Swal.fire("Add to cart");
    navigate("/cart");
  };

  return (
    <div className="cards">
      <img src={product.image} alt="" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h1>$ {product.price}</h1>
      <button onClick={handleSubmit}>Add to Cart</button>
    </div>
  );
}

export default Cards;
