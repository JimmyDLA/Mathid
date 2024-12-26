import React, { createContext, useContext, useState } from 'react';

const initialState = {
  name: '',
  level: '',
  operators: [],
  stars: 0
}

// Create the Context
const AppContext = createContext(initialState);

// Create a provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateName = (name: string) => {
    setState((prevState) => ({ ...prevState, name }));
  };

  const updateLevel = (level: string) => {
    setState((prevState) => ({ ...prevState, level}))
  };

  const updateOperators = (operators: []) => {
    setState((prevState) => ({ ...prevState, operators}))
  }

  const updateStars = (stars: number) => {
    setState((prevState) => ({ ...prevState, stars }))
  }

  return (
    <AppContext.Provider value={{ state, updateName, updateLevel, updateOperators, updateStars}}>
      {children}
    </AppContext.Provider>
  );
};

// Create a hook for easier access
export const useAppContext = () => useContext(AppContext);