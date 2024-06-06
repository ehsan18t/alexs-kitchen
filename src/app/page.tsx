import FoodGrid from "@/components/FoodGrid";
import { Button } from "@mui/material";

export const metadata = {
  title: "Home | Alex's Kitchen",
  description: "Home page",
};

export default function Home() {
  return (
    <main className="py-6 px-4 flex flex-col gap-5">
      <div className="flex justify-center items-center">
        <div className="w-4/5 md:w-2/3 lg:w-1/3">
          <Button
            className=" ring-1 ring-primary hover:bg-primary hover:text-white"
            color="primary"
            size="large"
            fullWidth
            variant="outlined"
          >
            Add Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
        <FoodGrid />
      </div>
    </main>
  );
}
