import axios from "axios";

export const createCart = async (userID, items) => {
  const res = await axios.post("http://localhost:5002/api/cart/create", {
    userID,
    items,
  });
  return res.data;
};
