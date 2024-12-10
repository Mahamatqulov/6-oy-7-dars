import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
import { toast } from "react-toastify";

function ProductsContainer() {
  const { addProduct, selectedProducts } = useContext(GlobalContext);
  const { products } = useLoaderData();
  const buyProduct = (e, prod) => {
    e.preventDefault();
    const product = selectedProducts.find((product) => prod.id == product.id);
    if (product) {
      toast.warn("Bu maxsulot savatda bor !");
      return;
    }

    addProduct({ ...prod, amount: 1 });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {products.map((prod) => {
        return (
          <Link
            to={`/singleproduct/${prod.id}`}
            key={prod.id}
            className="card bg-base-100 w-full shadow-xl gap-5"
          >
            <figure>
              <img src={prod.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{prod.title}</h2>
              <h2 className="flex items-center gap-2 text-2xl">
                {
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                }
                {prod.rating}
              </h2>
              <div className="flex ">
                <p className="text-xl font-medium  text-red-500  line-through">
                  ${prod.price}
                </p>
                <p className="text-xl font-medium  text-green-500 flex justify-end">
                  ${prod.discountPercentage}
                </p>
              </div>

              <div className="card-actions justify-end">
                <button
                  onClick={(e) => buyProduct(e, prod)}
                  className="btn btn-primary btn-block btn-sm md:btn-md"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsContainer;
