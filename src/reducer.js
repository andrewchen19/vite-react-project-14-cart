const reducer = (state, action) => {
  // 這兩個是和 external API 有關的 action
  if (action.type === "LOADING") {
    // spread out // create new object (without mutate original state's property)
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    // turn array of objects into array of arrays, then turn array of arrays into Map
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    // console.log(newCart);
    return { ...state, loading: false, cart: newCart };
  }
  if (action.type === "INCREASE_ITEM") {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    const newItem = { ...item, amount: item.amount + 1 };
    // If an element with the same key already exists, the element will be updated
    newCart.set(action.payload.id, newItem);

    return { ...state, cart: newCart };
  }
  if (action.type === "DECREASE_ITEM") {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    const newItem = { ...item, amount: item.amount - 1 };

    if (newItem.amount < 1) {
      newCart.delete(action.payload.id);
    } else {
      newCart.set(action.payload.id, newItem);
    }

    return { ...state, cart: newCart };
  }
  if (action.type === "REMOVE_ITEM") {
    // 重要：we shouldn't modify the "properties" of the state object directly, will lead to unexpected behavior, bugs, and performance issues
    // delete() will modify original Map (property of the state object)
    // so we create a new instance to update 並傳遞 new instance (without mutate original Map)
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);

    // 不直接寫成 { ...state, cart: state.cart.delete(action.payload.id) } 的原因在於
    // delete() will return boolean value ( indicate deletion was successful or not) 而非 new Map object
    return { ...state, cart: newCart };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: new Map() };
  }
  throw new Error(`不存在的 action type: ${action.type}`);
};

export default reducer;
