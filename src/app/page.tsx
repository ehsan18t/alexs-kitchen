import AddItemCard from "@/components/AddItemCard";
import FoodGrid from "@/components/FoodGrid";

export const metadata = {
  title: "Home | Alex's Kitchen",
  description: "Home page",
};

export default function Home() {
  return (
    <main className="py-6 px-4 flex flex-col gap-5">
      <div className="flex justify-center items-center">
        <div className="w-4/5 md:w-2/3 lg:w-1/3">
          <AddItemCard />
        </div>
      </div>
      <FoodGrid />
    </main>
  );
}
