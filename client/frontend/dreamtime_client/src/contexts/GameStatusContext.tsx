import React, { useState, createContext, ReactNode } from "react";
import { GameStatus } from "../types/matchTypes";

type GameStatusContext = {
  gameStatus: GameStatus;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};
export const GameStatusContext = createContext<GameStatusContext>({
  gameStatus: GameStatus.WAITING,
  setGameStatus: () => {},
});

export const GameStatusProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.WAITING);

  console.log({ gameStatus });
  return (
    <GameStatusContext.Provider value={{ gameStatus, setGameStatus }}>
      {children}
    </GameStatusContext.Provider>
  );
};
