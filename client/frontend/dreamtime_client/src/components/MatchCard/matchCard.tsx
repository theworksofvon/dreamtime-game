import { Box, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { MatchCard } from "../../types/matchTypes";

const MatchCard: React.FC<MatchCard> = ({ point, image }) => {
  const cardImage = (
    <Box>
      <img src={image} />
    </Box>
  );

  const cardContent = (
    <CardContent>
      <div>{cardImage}</div>
      <Typography>Points: {point}</Typography>
    </CardContent>
  );

  return <Card>{cardContent}</Card>;
};

export default MatchCard;
