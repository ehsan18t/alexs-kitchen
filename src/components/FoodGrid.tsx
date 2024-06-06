"use client";

import { FoodCard } from "@/components";
import { AppDispatch, RootState } from "@/store";
import { useRetrieveFoodsQuery } from "@/store/slices/foodApiSlice";
import { setFood } from "@/store/slices/foodSlice";
import { Food } from "@/types";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FoodGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isSuccess } = useRetrieveFoodsQuery({
    start: 0,
    end: 10,
  });

  const foods: Food[] = useSelector(
    (state: RootState) => state.root.food.foods
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(setFood(data));
    }
  }, [isSuccess, data, dispatch]);

  if (isLoading)
    return (
      <div className="w-full pt-52 flex justify-center items-center">
        <CircularProgress size={100} color="success" />;
      </div>
    );

  return (
    <>
      {foods?.map((food: Food) => (
        <FoodCard key={food.name} food={food} />
      ))}
    </>
  );
}
