import { FaCodeBranch } from "react-icons/fa";
import CartItem from "./CartItem";
import { useGlobalContext } from "./content";

const CartContainer = () => {
  const { cart, totalPrice, clearHandler } = useGlobalContext();
  // turn Map into array of arrays
  const cartArray = Array.from(cart.entries());
  // console.log(cartArray);

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          // "array" unpacking
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totalPrice.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearHandler}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
