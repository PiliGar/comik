import React, { createContext, useState, useEffect } from "react";
export const MainContext = createContext();

import { getAllUsers } from "../services/user.api";
import { getAllProfessionals } from "../services/professional.api";
import { getAllIssues } from "../services/issue.api";
import { getAllPublishers } from "../services/publisher.api";
import { getAllCharacters } from "../services/character.api";

export const MainContextProvider = ({ children }) => {
  //ui
  const [loading, setLoading] = useState(true);
  const [burgerOpen, setBurguerOpen] = useState(false);

  //content
  const [user, setUser] = useState();
  const [users, setUsers] = useState();
  const [professionals, setProfessionals] = useState();
  const [issues, setIssues] = useState();
  const [publishers, setPublishers] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.users);
    });
    getAllProfessionals().then((professionals) => {
      setProfessionals(professionals);
    });
    getAllIssues().then((issues) => {
      setIssues(issues);
    });
    getAllPublishers().then((publishers) => {
      setPublishers(publishers);
    });
    getAllCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  const handleBurger = (e) => {
    e.preventDefault();
    burgerOpen ? setBurguerOpen(false) : setBurguerOpen(true);
  };

  return (
    <MainContext.Provider
      value={{
        loading,
        setLoading,
        burgerOpen,
        setBurguerOpen,
        user,
        setUser,
        users,
        setUsers,
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
