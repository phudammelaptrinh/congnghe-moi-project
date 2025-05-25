import React, { useEffect, useState } from "react";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { createCart } from "../api/cart";
import { getFolder } from "../utils/folderMapping";

function ShopCartPage() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/books")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Lỗi lấy sản phẩm:", err));
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item.id_book === product.id_book
      );
      if (itemExists) {
        return prevItems.map((item) =>
          item.id_book === product.id_book
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id_book !== id)
    );
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id_book === id
          ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.Gia * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      await createCart(
        "u001",
        cartItems.map((item) => ({
          id_book: item.id_book,
          soLuong: item.quantity,
          gia: item.Gia,
        }))
      );
      alert("Đặt hàng thành công!");
      setCartItems([]);
    } catch (err) {
      alert("Lỗi khi đặt hàng");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-green-600 text-center">
          Shopping Cart
        </h1>

        {/* Danh sách sản phẩm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id_book}
              className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200"
            >
              <img
                src={`/images/book/${getFolder(product.tenLoaiSach)}/${
                  product.hinh
                }`}
                alt={product.tenSach}
                className="h-40 w-full object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-semibold mb-2 text-white">
                {product.tenSach}
              </h2>
              <p className="text-green-600 font-semibold">
                {product.Gia.toLocaleString()}₫
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
              >
                <FaCartPlus /> Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>

        {/* Giỏ hàng */}
        <div className="border p-4 rounded-lg shadow-lg bg-green-500">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Giỏ hàng của bạn
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-white">Giỏ hàng trống</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id_book}
                  className="flex justify-between items-center my-4 border-b pb-4"
                >
                  <img
                    src={`/images/book/${getFolder(item.tenLoaiSach)}/${
                      item.hinh
                    }`}
                    alt={item.tenSach}
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{item.tenSach}</h3>
                    <p className="text-white font-semibold">
                      {item.Gia.toLocaleString()}₫
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id_book, item.quantity - 1)
                        }
                        className="bg-white px-2 py-1 rounded text-green-600"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id_book, item.quantity + 1)
                        }
                        className="bg-white px-2 py-1 rounded text-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id_book)}
                    className="text-white"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              ))}
              <div className="flex justify-between items-center mt-6">
                <h3 className="text-xl font-bold text-white">Tổng:</h3>
                <span className="text-xl font-bold text-white">
                  {total.toLocaleString()}₫
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-white text-green-600 py-2 rounded-lg font-semibold hover:bg-gray-100"
              >
                Đặt hàng
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopCartPage;
