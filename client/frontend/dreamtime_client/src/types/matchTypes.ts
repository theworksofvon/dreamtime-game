export interface MatchCard {
  value: string;
  placement: number;
  point: number;
  image: string;
}

export type MatchCardArray = MatchCard[];

export interface MatchBoard {
  level: Difficulty;
  matchCards: MatchCardArray;
}

export type Difficulty = {
  difficulty: string;
  spots: number;
  timer: number;
};

export type DifficultyArray = Difficulty[];
