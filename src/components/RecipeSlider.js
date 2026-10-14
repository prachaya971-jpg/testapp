import { useRef } from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeSlider({ recipes }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      
      <button
        onClick={() => scroll('left')}
        aria-label="Scroll left"
        className="absolute -left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-stone-700 shadow-md backdrop-blur hover:bg-white md:flex"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

    
      <div
        ref={sliderRef}
        className="no-scrollbar flex space-x-4 overflow-x-auto px-4 py-4 md:space-x-6 md:px-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {recipes.map((item) => (
          <div key={item.id} style={{ scrollSnapAlign: 'start' }}>
            <RecipeCard recipe={item} />
          </div>
        ))}
      </div>

      {/* ปุ่มเลื่อนขวา */}
      <button
        onClick={() => scroll('right')}
        aria-label="Scroll right"
        className="absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-stone-700 shadow-md backdrop-blur hover:bg-white md:flex"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}