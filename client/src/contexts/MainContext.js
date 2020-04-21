import React, { createContext, useState, useEffect } from "react";
export const MainContext = createContext();

import { getAllUsers } from "../services/user.api";
import { getAllProfessionals } from "../services/professional.api";
import { getOneProfessional } from "../services/professional.api";
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

  const [professional, setProfessional] = useState();
  const [professionals, setProfessionals] = useState();

  const [issue, setIssue] = useState();
  const [issues, setIssues] = useState();

  const [publisher, setPublisher] = useState();
  const [publishers, setPublishers] = useState();

  const [character, setCharacter] = useState();
  const [characters, setCharacters] = useState();

  //   const getProfessional = async (id) => {
  //     const response = await getOneProfessional(id);
  //     return response.data;
  //   };

  const handleBurger = (e) => {
    e.preventDefault();
    burgerOpen ? setBurguerOpen(false) : setBurguerOpen(true);
  };

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

  return (
    <MainContext.Provider
      value={{
        loading,
        setLoading,
        burgerOpen,
        setBurguerOpen,
        handleBurger,
        user,
        setUser,
        users,
        setUsers,
        professional,
        setProfessional,
        professionals,
        setProfessionals,
        issue,
        setIssue,
        issues,
        setIssues,
        publisher,
        setPublisher,
        publishers,
        setPublishers,
        character,
        setCharacter,
        characters,
        setCharacters,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
