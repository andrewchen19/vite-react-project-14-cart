import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./content";

const Navbar = () => {
  const { totalAmount } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="total-amount">{totalAmount}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
