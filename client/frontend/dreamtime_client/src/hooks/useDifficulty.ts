import { useContext } from "react";
import { DifficultyContext } from "../contexts";

export const useDifficulty = () => useContext(DifficultyContext);
