import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./content";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeHandler, increaseHandler, decreaseHandler } =
    useGlobalContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h5>{title}</h5>
        <p className="item-price">${price}</p>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeHandler(id)}>
          remove
        </button>
      </div>

      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increaseHandler(id)}>
          <FaChevronUp />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decreaseHandler(id)}>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
