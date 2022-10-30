import { createContext, useReducer } from "react";

const initial_state = {
  id: "",
};

export const IdContext = createContext(initial_state);

const IdReducer = (state, action) => {
  switch (action.type) {
    case "NEW_Id":
      return action.payload;
    case "RESET_Id":
      return initial_state;
    default:
      return state;
  }
};

export const IdContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(IdReducer, initial_state);

  return (
    <IdContext.Provider
      value={{
        id: state.id,
        dispatch,
      }}
    >
      {children}
    </IdContext.Provider>
  );
};