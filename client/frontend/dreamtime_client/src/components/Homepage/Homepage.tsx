import { Box, Button } from "@mui/material";
import { DIFFICULTIES } from "../../utils/matchUtils";
import { useState } from "react";

const Homepage = () => {
  const [gameDifficulty, setGameDifficulty] = useState(DIFFICULTIES[0]);

  console.log({ gameDifficulty });
  return (
    <Box>
      <div>
        <h3>Pick your difficulty: </h3>
        {DIFFICULTIES.map((difficulty, index) => (
          <Button onClick={() => setGameDifficulty(difficulty)} key={index}>
            {difficulty.difficulty}
          </Button>
        ))}
      </div>
    </Box>
  );
};

export default Homepage;
