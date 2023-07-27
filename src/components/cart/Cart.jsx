import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="" />
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const cart = () => {
  function increment(item) {}
  function decrement(item) {}
  return (
    <section className="cart">
      <main>
        <CartItem
          value={1}
          title="Cheese Burger"
          img={burger1}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          value={1}
          title="chicken Cheese Burger"
          img={burger2}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          value={1}
          title="double chicken Cheese Burger with fries"
          img={burger3}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
            <div>
                <h4>Sub Total</h4>
                <p>₹{2000}</p>
            </div>
            <div>
                <h4>Tax</h4>
                <p>₹{2000*18/100}</p>
            </div>
            <div>
                <h4>Shipping Charges</h4>
                <p>₹{100}</p>
            </div>
            <div>
                <h4>Total</h4>
                <p>₹{2460}</p>
            </div>

            <Link to='/shipping'>Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default cart;
