import { useGlobalContext } from "../hooks/userGlobalContext";

const colors = ["#1C325B", "#6A1E55", "#1B1833", "#4335A7"];

function ColorContainer() {
  const { dispatch } = useGlobalContext();
  return (
    <div className="align-elements w-full mb-10 flex justify-end">
      <ul className="flex gap-3">
        {colors.map((color) => {
          return (
            <li
              onClick={() =>
                dispatch({
                  type: "CHANGE_COLOR",
                  payload: color,
                })
              }
              key={color}
              className="w-7 h-7 border rounded-full cursor-pointer hover:border-red-500"
              style={{ background: color }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColorContainer;
