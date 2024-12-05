import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const product = req.data;
  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl ">
      <figure className="w-[1200px]">
        <img className=" " src={product.thumbnail} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{product.title}</h2>
        <p className="text-xl">{product.description}</p>
        <p className="font-medium text-2xl"> Brand:{product.brand}</p>

        <h3 className="flex items-center gap-2 text-2xl">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          {product.rating}
        </h3>
        <h3 className="font-medium text-2xl text-red-500  line-through">
          ${product.price}
        </h3>
        <h3 className="font-medium text-2xl text-green-500">
          ${product.discountPercentage}
        </h3>

        <div className="card-actions justify-end">
          <button
            onClick={(e) => buyProduct(e, prod)}
            className="btn btn-primary btn-sm md:btn-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
