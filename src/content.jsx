import { createContext, useContext, useEffect, useReducer } from "react";
// import external API (從外部提取資料)
const url = "https://www.course-api.com/react-useReducer-cart-project";
// create globalContext
const globalContext = createContext();
// export custom hook
export const useGlobalContext = () => useContext(globalContext);
// import reducer
import reducer from "./reducer";
// import self-made function
import { getTotal } from "./utilize";

// state (an object)
const initialState = {
  loading: false,
  // 這邊使用 Map 來處理，因為可以在 reducer 運用其 methods 來處理其他 logic
  cart: new Map(),
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // use self-made function
  const { totalAmount, totalPrice } = getTotal(state.cart);

  // function
  const FetchData = async () => {
    dispatch({ type: "LOADING" });
    let response = await fetch(url);
    let cart = await response.json();
    // cart => array of objects
    dispatch({ type: "DISPLAY_ITEMS", payload: { cart } });
  };

  // useEffect
  useEffect(() => {
    FetchData();
  }, []);

  // event Handling
  const increaseHandler = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: { id } });
  };
  const decreaseHandler = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: { id } });
  };
  const removeHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };
  const clearHandler = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <globalContext.Provider
      value={{
        ...state,
        clearHandler,
        removeHandler,
        increaseHandler,
        decreaseHandler,
        totalAmount,
        totalPrice,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default AppContext;
