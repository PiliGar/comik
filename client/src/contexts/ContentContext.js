import React, { createContext, useState, useEffect } from "react";
export const ContentContext = createContext();

export const ContentContextProvider = ({ children }) => {
  const [professionals, setProfessionals] = useState();
  const [issues, setIssues] = useState();
  const [publishers, setPublishers] = useState();
  const [characters, setCharacters] = useState();

  return (
    <ContentContext.Provider
      value={{
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
    </ContentContext.Provider>
  );
};
