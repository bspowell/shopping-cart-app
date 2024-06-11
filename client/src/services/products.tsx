import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const deleteProduct = async (id: string) => {
  await axios.delete(`/api/products/${id}`)
}