import React, { useState, createContext, ReactNode } from "react";
import { Difficulties } from "../types/matchTypes";

type DifficultyContextType = {
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulties>>;
};

export const DifficultyContext = createContext<DifficultyContextType>({
  difficulty: Difficulties.REGULAR,
  setDifficulty: () => {},
});

export const DifficultyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [difficulty, setDifficulty] = useState<Difficulties>(
    Difficulties.REGULAR
  );
  console.log({ difficulty });
  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};
