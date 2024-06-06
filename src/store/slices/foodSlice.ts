import food from "@/data/food";
import { Food } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface FoodState {
  foods: Food[];
}

const initialState: FoodState = {
  foods: food,
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.foods.push(action.payload);
    },
    removeFood: (state, action) => {
      state.foods = state.foods.filter((food) => food.id !== action.payload.id);
    },
    editFood: (state, action) => {
      const index = state.foods.findIndex(
        (food) => food.id === action.payload.id
      );
      state.foods[index] = action.payload;
    },
  },
});

export const { addFood, removeFood, editFood } = foodSlice.actions;
export default foodSlice.reducer;
