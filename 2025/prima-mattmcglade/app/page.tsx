import type { Metadata } from 'next'
import PageStructure from './PageStructure';
import { Recipe } from '@/custom-type';
import DataPush from './DataPush';

export const metadata: Metadata = {
  title: 'Recipes Search App',
  description: 'An app that helps you search for Recipes',
}

export default async function Home() {
  let error = null;

  const fetchData = async () => {
    let dataResponse;

    try {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      const updatedRecipes = data.recipes.map((recipe: Recipe) => ({
        ...recipe,
        image: `https://source.unsplash.com/400x300/?food,${recipe.name}`, // Dynamic image from Unsplash
      }));

      dataResponse = updatedRecipes;
      // Errors need to be set to any
    } catch (err: any) {
      error = err?.message || err;
      console.error("Error fetching recipes:", err);
    }
    return dataResponse;
  };

  const allData = await fetchData();

  const dataInfo = {
    allData,
    error,
  }

  return (
    <DataPush {...dataInfo}>
      <PageStructure />
    </DataPush>
  );
}
