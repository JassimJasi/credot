import "./style.css";

function Banners() {
  return (
    <div className="banner_body">
      <div className="banner_left">
        <h2>X-Box For Your Living Room</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          inventore quibusdam asperiores vitae impedit dolor veritatis!
          Obcaecati.
        </p>
        <h1>$600</h1>
        <button>Buy Now</button>
      </div>
      <div className="banner_right">
        <img src="/image/xbox.png" alt="" srcset="" />
      </div>
    </div>
  );
}

export default Banners;
