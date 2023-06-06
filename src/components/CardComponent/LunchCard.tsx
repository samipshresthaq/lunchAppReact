import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Share, Favorite } from "@mui/icons-material";

interface LunchCardProps {
  children: React.ReactNode;
}

const cardMaxWidth = 240;

const LunchCard = () => {
  return (
    <Card sx={{ maxWidth: cardMaxWidth }}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.themealdb.com/images/category/beef.png"
        alt="Paella dish"
      ></CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>

        <Button sx={{ marginLeft: "auto" }} startIcon={<Add />} size="medium">
          Add Item
        </Button>
      </CardActions>
    </Card>
  );
};

export default LunchCard;
