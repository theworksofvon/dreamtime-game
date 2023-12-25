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

export type Difficulties = "normal" | "medium" | "hard";

export type Difficulty = {
  difficulty: Difficulties;
  spots: number;
  timer: number;
};

export type DifficultyArray = Difficulty[];
