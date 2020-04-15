import React, { createContext, useState, useEffect } from "react";
export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [burgerOpen, setBurguerOpen] = useState(false);

  const handleBurger = (e) => {
    e.preventDefault();
    // burgerOpen ? setBurguerOpen(false) : setBurguerOpen(true);
    if (burgerOpen) {
      console.log("cerrar menu");
      setBurguerOpen(false);
    } else {
      console.log("abrir menu");
      setBurguerOpen(true);
    }
  };

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        burgerOpen,
        setBurguerOpen,
        handleBurger,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
