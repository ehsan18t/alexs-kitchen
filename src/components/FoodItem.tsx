"use client";

import { AppDispatch } from "@/store";
import { editFood, removeFood } from "@/store/slices/foodSlice";
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
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";

export default function FoodItem({
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
          {food.description}
        </Typography>
      </CardContent>
      <CardActions
        className="flex justify-between px-4 mb-2"
        disableSpacing
        sx={{ mt: "auto" }}
      >
        <Button
          onClick={() => dispatch(editFood(food))}
          color="primary"
          variant="outlined"
        >
          <CiEdit size={25} />
        </Button>
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