// Them sach vao gio hang
export const addToCart = (cart, book) => {
  const exists = cart.find((item) => item.id_book === book.id_book);
  if (exists) {
    return cart.map((item) =>
      item.id_book === book.id_book
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cart, { ...book, quantity: 1 }];
};

// giam so luong
export const decreaseQuantity = (cart, id_book) => {
  return cart
    .map((item) =>
      item.id_book === id_book ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
};

// Xoa khoi gioi hang
export const removeFromCart = (cart, id_book) => {
  return cart.filter((item) => item.id_book !== id_book);
};
