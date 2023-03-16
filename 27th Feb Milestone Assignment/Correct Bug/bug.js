function doubleCartQuantity(cart) {
    const newCart = cart.map(quantity => quantity * 2);
    return newCart;
  }
  
  const cart = [1, 2, 3, 4, 5];
  const newCart = doubleCartQuantity(cart);
  console.log(newCart);
  