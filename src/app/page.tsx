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
          className="w-4/5 md:w-2/3 lg:w-1/3 ring-1 ring-primary hover:bg-primary hover:text-white"
          color="primary"
          size="large"
          fullWidth
          variant="outlined"
        >
          Add Item
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
        {food?.map((item: Food) => (
          <FoodCard key={item.name} food={item} />
        ))}
      </div>
    </main>
  );
}
