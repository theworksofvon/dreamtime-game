import { Difficulties, DifficultyArray } from "../types/matchTypes";

export const DIFFICULTIES: DifficultyArray = [
  {
    difficulty: Difficulties.REGULAR,
    spots: 15,
    timer: 30,
  },
  {
    difficulty: Difficulties.EXPERT,
    spots: 30,
    timer: 20,
  },
  {
    difficulty: Difficulties.INSANE,
    spots: 50,
    timer: 10,
  },
];
