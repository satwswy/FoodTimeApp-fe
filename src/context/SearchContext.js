import { createContext, useReducer } from "react";

const initial_state = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    table: undefined,
  },
};

export const SearchContext = createContext(initial_state);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return initial_state;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initial_state);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
