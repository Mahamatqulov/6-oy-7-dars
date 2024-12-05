import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import ProductsContainer from "../components/ProductsContainer";

export const loader = async () => {
  const req = await axiosInstance.get("/products");
  const products = req.data.products;
  return { products };
};
function Home() {
  const products = useLoaderData();

  return <ProductsContainer />;
}

export default Home;
