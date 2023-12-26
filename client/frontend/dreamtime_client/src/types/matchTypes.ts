export interface MatchCard {
  value: string;
  placement: number;
  point: number;
  image: string;
}

export type MatchCardArray = MatchCard[];

export interface MatchBoardType {
  level: Difficulty;
  matchCards: MatchCardArray;
}

export enum Difficulties {
  REGULAR = "regular",
  EXPERT = "expert",
  INSANE = "insane",
}

export enum GameStatus {
  STARTED = "started",
  ONGOING = "ongoing",
  FINISHED = "finished",
  WAITING = "waiting",
  LOADING = "loading",
}

export type Difficulty = {
  difficulty: Difficulties;
  spots: number;
  timer: number;
};

export type DifficultyArray = Difficulty[];
