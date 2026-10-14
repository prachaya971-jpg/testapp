export default function RecipeHeader() {
  return (
    <div className="relative mb-6 px-4 md:px-8">
      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-black tracking-widest text-red-600 sm:text-3xl md:text-4xl">
          RECOMMENDED
        </h2>
        <span className="font-serif -mt-1 text-2xl italic text-red-500 sm:text-3xl md:text-4xl">
          Recipes
        </span>
      </div>
    </div>
  );
}