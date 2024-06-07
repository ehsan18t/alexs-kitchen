import { Food } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface FoodState {
  foods: Food[];
  backupFoods?: Food[] | null;
}

const initialState: FoodState = {
  foods: [],
  backupFoods: null,
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFood: (state, action) => {
      state.foods = action.payload;
    },
    addFood: (state, action) => {
      // find find max id
      const maxId = state.foods.reduce((max, food) => {
        return food.id > max ? food.id : max;
      }, 0);

      state.foods.push({ ...action.payload, id: maxId + 1 });
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
    searchFood: (state, action) => {
      if (state.backupFoods === null) {
        state.backupFoods = state.foods;
      } else {
        state.foods = state.backupFoods || [];
      }

      if (action.payload == "") {
        state.foods = state.backupFoods || [];
        state.backupFoods = null;
        return;
      }

      state.foods = state.foods.filter((food) =>
        // filter with name, description, and ingredients
        [food.name, food.description, ...food.ingredients].some((field) =>
          field.toLowerCase().includes(action.payload.toLowerCase())
        )
      );
    },
  },
});

export const { setFood, addFood, removeFood, editFood, searchFood } =
  foodSlice.actions;
export default foodSlice.reducer;
