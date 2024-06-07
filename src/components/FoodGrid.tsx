"use client";

import { FoodCard, FoodViewModal } from "@/components";
import { AppDispatch, RootState } from "@/store";
import { useRetrieveFoodsQuery } from "@/store/slices/foodApiSlice";
import { setFood } from "@/store/slices/foodSlice";
import { Food } from "@/types";
import { Box, CircularProgress, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "0px solid #000",
};

export default function FoodGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isSuccess } = useRetrieveFoodsQuery({
    start: 0,
    end: 10,
  });

  const foods: Food[] = useSelector(
    (state: RootState) => state.root.food.foods
  );

  const [selectedFood, setSelectedFood] = useState<Food>({} as Food);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedFood({} as Food);
  };

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
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
      {foods?.map((food: Food) => (
        <FoodCard
          onFoodSelect={() => {
            setSelectedFood(food);
            handleOpen();
          }}
          key={`foodgrid_${food.id}`}
          food={food}
        />
      ))}
      <Modal
        sx={{ backdropFilter: "blur(10px)" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FoodViewModal food={selectedFood} />
        </Box>
      </Modal>
    </div>
  );
}
