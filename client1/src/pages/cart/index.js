import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearData } from "../../redux/action";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.data);
  const totalPrice = product.reduce((sum, prod) => sum + prod.price, 0);

  const handleBuy = () => {
    dispatch(clearData());
    Swal.fire("Purchase Successful");
    navigate("/");
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <Link to={"/"}>Continue Shopping</Link>
      </div>
      <div className="cart-items">
        {product?.map((data) => (
          <div className="cart-item">
            <img src={data.image} alt="item1" />
            <div className="cart-item-info">
              <h3>{data.name}</h3>
              <p>{data.description}</p>
              <p className="price">${data.price}</p>
            </div>
          </div>
        ))}

        {/* <div className="cart-item">
          <img src="item2.jpg" alt="item2" />
          <div class="cart-item-info">
            <h3>Item 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p class="price">$200</p>
          </div>
        </div> */}
      </div>

      <div className="cart-buy">
        <div className="cart-total">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
        <div className="btn">
          <button onClick={handleBuy}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
