import AddItem from "@/components/AddItem";
import FoodGrid from "@/components/FoodGrid";
import SearchBar from "@/components/Search";

export const metadata = {
  title: "Home | Alex's Kitchen",
  description: "Home page",
};

export default function Home() {
  return (
    <main className="py-6 px-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <AddItem />
        </div>
        <div className="w-2/4 md:w-1/3">
          <SearchBar />
        </div>
      </div>
      <FoodGrid />
    </main>
  );
}
