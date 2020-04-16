import React, { createContext, useState, useEffect } from "react";
export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  //user
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [burgerOpen, setBurguerOpen] = useState(false);

  //content
  const [professionals, setProfessionals] = useState();
  const [issues, setIssues] = useState();
  const [publishers, setPublishers] = useState();
  const [characters, setCharacters] = useState();

  const handleBurger = (e) => {
    e.preventDefault();
    burgerOpen ? setBurguerOpen(false) : setBurguerOpen(true);
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
        professionals,
        setProfessionals,
        issues,
        setIssues,
        publishers,
        setPublishers,
        characters,
        setCharacters,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
