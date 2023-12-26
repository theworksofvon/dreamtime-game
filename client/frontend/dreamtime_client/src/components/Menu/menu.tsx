import { Box, Button, Container } from "@mui/material";
import { DIFFICULTIES } from "../../utils/matchUtils";
import { Difficulties, GameStatus } from "../../types/matchTypes";
import { useState } from "react";
import { useDifficulty, useGameStatus } from "../../hooks";

const Menu: React.FC = () => {
  const [gameDifficulty, setGameDifficulty] = useState(Difficulties.REGULAR);
  const { setDifficulty } = useDifficulty();
  const { setGameStatus } = useGameStatus();

  const defineGameSettings = (difficulty: Difficulties) => {
    setDifficulty(difficulty);
    setGameStatus(GameStatus.LOADING);
  };
  return (
    <Container>
      <Box>
        <div>
          <h3>Pick your difficulty: </h3>
          {DIFFICULTIES.map((difficulty, index) => (
            <Button
              onClick={() => setGameDifficulty(difficulty.difficulty)}
              key={index}
            >
              {difficulty.difficulty}
            </Button>
          ))}
          <Button onClick={() => defineGameSettings(gameDifficulty)}>
            Confirm
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Menu;
