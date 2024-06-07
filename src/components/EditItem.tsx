"use client";

import { FoodForm } from "@/components";
import { editFood } from "@/store/slices/foodSlice";
import { Food } from "@/types";
import { Button } from "@mui/material";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";

export default function EditItem({ food }: { food: Food }) {
  const dispatch = useDispatch();

  const [selectedFood, setSelectedFood] = useState(food);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    dispatch(editFood(selectedFood));
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen} color="primary" variant="outlined">
        <CiEdit size={25} />
      </Button>

      <FoodForm
        item={selectedFood}
        formTitle="Edit Food Item"
        open={open}
        handleOnClose={handleClose}
        handleOnSubmit={handleSubmit}
        setItem={setSelectedFood}
      />
    </>
  );
}
