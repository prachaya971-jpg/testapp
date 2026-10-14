export default function RecipeCard({ recipe }) {
  return (
    <div className="relative flex h-80 w-56 flex-shrink-0 flex-col justify-end overflow-hidden rounded-2xl shadow-md transition-all hover:scale-[1.02] hover:shadow-xl sm:h-96 sm:w-60">
      
      <img
        src={recipe.image}
        alt={recipe.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      
      <div className="relative z-10 p-4 text-white">
        <h4 className="truncate text-base font-bold uppercase tracking-wide">
          {recipe.title}
        </h4>
        <p className="mt-1 text-xs text-stone-300">
          {recipe.cookingTimeMinutes} mins | {recipe.servings} servings
        </p>
      </div>

    </div>
  );
}