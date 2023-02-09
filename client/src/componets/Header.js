import "./style.css";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [btnHide, setBtnHide] = useState(false);
  const [activeBtn, setactiveBtn] = useState(1);
  const data = useSelector((state) => state.data);
  function handelClick(num) {
    setactiveBtn(num);
  }
  return (
    <div className="header">
      <nav className="navigation">
        <div onClick={() => handelClick(1)}>
          <Link className={activeBtn === 1 ? "link active" : "link"} to={"/"}>
            Home
          </Link>
        </div>
        <div onClick={() => handelClick(2)}>
          <Link className={activeBtn === 2 ? "link active" : "link"} to={"/"}>
            Shoes
          </Link>
        </div>
        <div onClick={() => handelClick(3)}>
          <Link className={activeBtn === 3 ? "link active" : "link"} to={"/"}>
            Backpack
          </Link>
        </div>
        <div onClick={() => handelClick(4)}>
          <Link className={activeBtn === 4 ? "link active" : "link"} to={"/"}>
            Contact
          </Link>
        </div>
      </nav>
      <div
        className="log1"
        onClick={() => {
          setBtnHide((prev) => !prev);
        }}
      >
        ^
      </div>
      {btnHide ? (
        <div className="mobile_nav">
          <div onClick={() => handelClick(1)}>
            <Link className={activeBtn === 1 ? "link active" : "link"} to={"/"}>
              Home
            </Link>
          </div>
          <div onClick={() => handelClick(2)}>
            <Link className={activeBtn === 2 ? "link active" : "link"} to={"/"}>
              Shoes
            </Link>
          </div>
          <div onClick={() => handelClick(3)}>
            <Link className={activeBtn === 3 ? "link active" : "link"} to={"/"}>
              Backpack
            </Link>
          </div>
          <div onClick={() => handelClick(4)}>
            <Link className={activeBtn === 4 ? "link active" : "link"} to={"/"}>
              Contact
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        {data?.length ? <div className="notification">{data?.length}</div> : ""}

        <Link to={"/cart"} className="log">
          <TiShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default Header;
