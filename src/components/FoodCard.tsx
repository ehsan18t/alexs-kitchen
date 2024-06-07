"use client";

import { EditItem } from "@/components";
import { AppDispatch } from "@/store";
import { removeFood } from "@/store/slices/foodSlice";
import { Food } from "@/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function FoodCard({
  food,
  onFoodSelect,
}: {
  food: Food;
  onFoodSelect: (food: Food) => void;
}) {
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
        onClick={() => onFoodSelect(food)}
        component="img"
        alt="green iguana"
        height="140"
        image={food.thumbnail}
      />
      <CardContent onClick={() => onFoodSelect(food)}>
        <Typography gutterBottom variant="h5" component="div">
          {food.name}
        </Typography>
        <Typography
          className="text-justify"
          variant="body2"
          color="text.secondary"
        >
          {food.description.slice(0, 200) + "..."}
        </Typography>
      </CardContent>
      <CardActions
        className="flex justify-between px-4 mb-2"
        disableSpacing
        sx={{ mt: "auto" }}
      >
        <EditItem food={food} />
        <Button
          onClick={() => dispatch(removeFood(food))}
          color="error"
          variant="outlined"
        >
          <AiOutlineDelete size={25} />
        </Button>
      </CardActions>
    </Card>
  );
}
