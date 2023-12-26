import { useContext } from "react";
import { GameStatusContext } from "../contexts";

export const useGameStatus = () => useContext(GameStatusContext);
