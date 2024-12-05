import { createContext, useEffect, useReducer } from "react";

// const dataFromLocalStorage = () => {
//   return (
//     JSON.parse(localStorage.getItem("products")) || {
//       color: "",
//       selectedProduct: [],
//     }
//   );
// };

export const GlobalContext = createContext();
const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        selectedProduct: [...state.selectedProduct, payload],
      };
    case "CHANGE_COLOR":
      return { ...state, color: payload };
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    color: "",
    selectedProduct: [],
  });

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(state));
  // }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
