"use client";

import { addFood } from "@/store/slices/foodSlice";
import { Food } from "@/types";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ItemForm from "./ItemForm";

export default function AddItemCard() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newFood: Food = {
      id: -1,
      name: formData.get("name") as string,
      thumbnail: formData.get("thumbnail") as string,
      description: formData.get("description") as string,
      ingredients: (formData.get("ingredients") as string).split(","),
    };

    dispatch(addFood(newFood));
    handleClose();
  };

  const handleOnChangeIngredient = (event: any, ing: string) => {};

  return (
    <>
      <Button
        className=" ring-1 ring-primary hover:bg-primary hover:text-white"
        color="primary"
        size="large"
        fullWidth
        variant="outlined"
        onClick={handleOpen}
      >
        Add Item
      </Button>
      <ItemForm
        formTitle="Add New Food Item"
        open={open}
        handleOnClose={handleClose}
        handleOnSubmit={handleSubmit}
        handleOnChangeIngredient={handleOnChangeIngredient}
      />
    </>
  );
}
