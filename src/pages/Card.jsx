import TableRow from "../components/TabelRow";
import { useGlobalContext } from "../hooks/userGlobalContext";
import { formatPirce } from "../utils";
import { Link } from "react-router-dom";

function Card() {
  const { selectedProducts, totalPrice, totalAmount } = useGlobalContext();

  if (selectedProducts.length == 0) {
    return (
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-center text-3xl font-bold">
          You don't have any products!
        </h1>
        <Link to="/" className="btn btn-primary">
          Buy Something :)
        </Link>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => {
            return (
              <TableRow
                key={product.id}
                id={product.id}
                title={product.title}
                brand={product.brand}
                thumbnail={product.thumbnail}
                price={product.price}
                amount={product.amount}
              />
            );
          })}
        </tbody>
      </table>
      <div className="flex  justify-between  items-center mt-10">
        <h2 className="font-semibold">Total Amount :{totalAmount}</h2>
        <h2 className="font-semibold">Total Price:{totalPrice}</h2>
      </div>
    </div>
  );
}

export default Card;
