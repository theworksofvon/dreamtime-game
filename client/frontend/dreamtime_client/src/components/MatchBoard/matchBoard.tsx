import { Box } from "@mui/material";
import React from "react";
import { MatchBoard, MatchCardArray } from "../../types/matchTypes";

const MatchBoard: React.FC<MatchBoard> = ({ level, matchCards }) => {
  const defineInitialBoard = () => {
    for (let i = 0; i < level.spots; i++) {
      return <div>not implemented yet</div>;
    }
  };

  const displayMatchCards = (matchCards: MatchCardArray) => {
    console.log(`not implemented yet: ${matchCards}`);
  };
  displayMatchCards(matchCards);

  return <Box>{defineInitialBoard()}</Box>;
};

export default MatchBoard;
