import { FoodCard } from "@/components";
import food from "@/data/food";
import { Button } from "@mui/material";

import { Food } from "@/types";

export const metadata = {
  title: "Home | Alex's Kitchen",
  description: "Home page",
};

export default function Home() {
  return (
    <main className="py-6 px-4 flex flex-col gap-5">
      <div className="flex justify-center items-center">
        <Button
          className="w-1/3"
          color="primary"
          size="large"
          fullWidth
          variant="contained"
        >
          Add Item
        </Button>
      </div>
      <div className="px-2 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
        {food?.map((item: Food) => (
          <FoodCard key={item.name} food={item} />
        ))}
      </div>
    </main>
  );
}
