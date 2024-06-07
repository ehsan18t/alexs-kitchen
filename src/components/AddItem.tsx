"use client";

import { FoodForm } from "@/components";
import { addFood } from "@/store/slices/foodSlice";
import { Food } from "@/types";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddItem() {
  const dispatch = useDispatch();

  const [selectedFood, setSelectedFood] = useState({} as Food);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    dispatch(addFood(selectedFood));
    handleClose();
  };

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
      <FoodForm
        formTitle="Add New Food Item"
        open={open}
        handleOnClose={handleClose}
        handleOnSubmit={handleSubmit}
        setItem={setSelectedFood}
      />
    </>
  );
}
