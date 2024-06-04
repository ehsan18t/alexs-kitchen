import { FoodCard } from "@/components";
import food from "@/data/food";

export default function Home() {
  return (
    <main className="py-3">
      <div className="px-2 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
        {food?.map((item) => (
          <FoodCard key={item.name} food={item} />
        ))}
      </div>
    </main>
  );
}
