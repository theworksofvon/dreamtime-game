import { Box, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import { MatchCard } from "../../types/matchTypes";

const MatchCard: React.FC<MatchCard> = ({ point, image }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const cardBackImage = "";

  const cardImage = (
    <Box>
      <img src={isFlipped ? image : cardBackImage} />
    </Box>
  );

  const cardContent = (
    <CardContent>
      <div>{cardImage}</div>
      {isFlipped ? <Typography>Points: {point}</Typography> : null}
    </CardContent>
  );

  return (
    <Box onClick={() => setIsFlipped(true)}>
      <Card>{cardContent}</Card>
    </Box>
  );
};

export default MatchCard;
