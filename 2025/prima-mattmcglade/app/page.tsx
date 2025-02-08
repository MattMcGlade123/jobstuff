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

      // const getImageUrl = async () => {
      //   const randomImageResponse = await fetch(`https://source.unsplash.com/400x300/?food`);
      //   const randomImageData = await randomImageResponse.json();
      //   return randomImageData.image;
      // };

      // Just adding random food image but sadly it won't make the actual recipe unless I get really lucky!
      // const randomFoodImage = data.recipes.map(() => getImageUrl());
      // const imageUrls = await Promise.all(randomFoodImage);

      const updatedRecipes = data.recipes.map((recipe: Recipe, index: number) => ({
        ...recipe,
        // image: imageUrls[index],
        image: `https://loremflickr.com/400/300/food?random=${Math.random()}`
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
