"use client";

import { AppDispatch } from "@/store";
import { Food } from "@/types";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";

export default function FoodCard({ food }: { food: Food }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={food.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {food.name}
        </Typography>
        <Typography
          className="text-justify"
          variant="body2"
          color="text.secondary"
        >
          {food.description}
        </Typography>
      </CardContent>
      <CardActions
        className="flex flex-wrap gap-2 p-2 mx-2 mb-2 items-center"
        disableSpacing
        sx={{ mt: "auto" }}
      >
        <Typography gutterBottom variant="h6" component="div">
          Ingredients:{" "}
        </Typography>
        {food.ingredients.map((ingredient, index) => (
          <Typography
            className="p-1 px-2 border-[1px] rounded-md border-primary"
            key={index}
            variant="body2"
            color="text.secondary"
          >
            {ingredient}
          </Typography>
        ))}
      </CardActions>
    </Card>
  );
}
