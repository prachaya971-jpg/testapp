import logo from './logo.svg';
import './App.css';
import RecipeHeader from './components/RecipeHeader';
import RecipeSlider from './components/RecipeSlider';
import { recipesData } from './data/recipesData';
import './index.css'

function App() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] py-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <RecipeHeader />
        <RecipeSlider recipes={recipesData} />
      </div>
    </main>
  );
}

export default App;
