// self made function
export const getTotal = (cart) => {
  //  get Map object
  //  console.log(cart);

  let totalAmount = 0;
  let totalPrice = 0;

  // for of loop
  // Map.values() will return iterator object that contains value for each element
  // value 在這是 object
  for (const item of cart.values()) {
    totalAmount += item.amount;
    totalPrice += item.amount * item.price;
  }

  return { totalAmount, totalPrice };
};
