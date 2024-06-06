"use client";

import { FoodCard } from "@/components";
import { RootState } from "@/store";
import { useRetrieveFoodsQuery } from "@/store/slices/foodApiSlice";
import { Food } from "@/types";
import { useSelector } from "react-redux";

export default function FoodGrid() {
  const { data, error, isLoading } = useRetrieveFoodsQuery({
    start: 0,
    end: 10,
  });

  console.log(data);

  const foods: Food[] = useSelector(
    (state: RootState) => state.root.food.foods
  );

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
      {foods?.map((food: Food) => (
        <FoodCard key={food.name} food={food} />
      ))}
    </div>
  );
}
