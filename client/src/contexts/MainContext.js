import React, { createContext, useState, useEffect } from "react";
export const MainContext = createContext();

import { getAllUsers } from "../services/user.api";
import {
  getAllProfessionals,
  getFavProfessionals,
} from "../services/professional.api";
import {
  getAllIssues,
  getFavIssues,
  getWantedIssues,
} from "../services/issue.api";
import { getAllPublishers, getFavPublishers } from "../services/publisher.api";
import { getAllCharacters, getFavCharacters } from "../services/character.api";

export const MainContextProvider = ({ children }) => {
  //ui
  const [loading, setLoading] = useState(true);
  const [burgerOpen, setBurguerOpen] = useState(false);

  //content
  const [user, setUser] = useState();
  const [users, setUsers] = useState();

  const [professional, setProfessional] = useState();
  const [professionals, setProfessionals] = useState();
  const [favProfessionals, setFavProfessionals] = useState();

  const [issue, setIssue] = useState();
  const [issues, setIssues] = useState();
  const [favIssues, setFavIssues] = useState();
  const [wantedIssues, setWantedIssues] = useState();

  const [publisher, setPublisher] = useState();
  const [publishers, setPublishers] = useState();
  const [favPublishers, setFavPublishers] = useState();

  const [character, setCharacter] = useState();
  const [characters, setCharacters] = useState();
  const [favCharacters, setFavCharacters] = useState();

  const handleBurger = (e) => {
    e.preventDefault();
    burgerOpen ? setBurguerOpen(false) : setBurguerOpen(true);
  };

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.users);
    });

    //professionals
    getAllProfessionals().then((professionals) => {
      setProfessionals(professionals);
    });
    getFavProfessionals().then((favs) => {
      setFavProfessionals(favs);
    });

    //issues
    getAllIssues().then((issues) => {
      setIssues(issues);
    });
    getFavIssues().then((favs) => {
      setFavIssues(favs);
    });
    getWantedIssues().then((wanties) => {
      setWantedIssues(wanties);
    });

    //publishers
    getAllPublishers().then((publishers) => {
      setPublishers(publishers);
    });
    getFavPublishers().then((favs) => {
      setFavPublishers(favs);
    });

    //characters
    getAllCharacters().then((characters) => {
      setCharacters(characters);
    });
    getFavCharacters().then((favs) => {
      setFavCharacters(favs);
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
        favProfessionals,
        setFavProfessionals,
        issue,
        setIssue,
        issues,
        setIssues,
        favIssues,
        setFavIssues,
        wantedIssues,
        setWantedIssues,
        publisher,
        setPublisher,
        publishers,
        setPublishers,
        favPublishers,
        setFavPublishers,
        character,
        setCharacter,
        characters,
        setCharacters,
        favCharacters,
        setFavCharacters,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
