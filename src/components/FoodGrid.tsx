"use client";

import { FoodCard } from "@/components";
import { RootState } from "@/store";
import { Food } from "@/types";
import { useSelector } from "react-redux";

export default function FoodGrid() {
  const foods: Food[] = useSelector((state: RootState) => state.food.foods);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
      {foods?.map((food: Food) => (
        <FoodCard key={food.name} food={food} />
      ))}
    </div>
  );
}
