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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";

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
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Button
          sx={{ marginLeft: "auto" }}
          startIcon={<AddIcon />}
          size="medium"
        >
          Add Item
        </Button>
      </CardActions>
    </Card>
  );
};

export default LunchCard;
