import { useGlobalContext } from "../hooks/userGlobalContext";
function TableRow({ id, price, amount, title, brand, thumbnail }) {
  const { changeAmount, removeProduct } = useGlobalContext();
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Brand:{brand}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-2xl text-xl">${price}</span>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <button
            className="btn text-3xl font-medium "
            onClick={() => changeAmount(id, "increase")}
          >
            &#43;
          </button>
          <span className="text-3xl font-medium">{amount}</span>
          <button
            className="btn text-3xl font-medium "
            onClick={() => {
              if (amount == 1) {
                removeProduct(id);
              } else {
                changeAmount(id, "decrease");
              }
            }}
          >
            &#8722;
          </button>
        </div>
      </td>
      <th>
        <button
          onClick={() => removeProduct(id)}
          className="btn btn-error btn-xs"
        >
          delete
        </button>
      </th>
    </tr>
  );
}

export default TableRow;
