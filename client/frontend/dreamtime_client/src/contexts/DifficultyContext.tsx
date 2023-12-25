import { useState, createContext, useContext } from "react";

export const DifficultyContext = createContext({
  difficulty: "normal",
  setDifficulty: () => "normal",
});

export const DifficultyProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("normal");

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};

// Custom hook for easy access to the context
export const useDifficulty = () => useContext(DifficultyContext);
