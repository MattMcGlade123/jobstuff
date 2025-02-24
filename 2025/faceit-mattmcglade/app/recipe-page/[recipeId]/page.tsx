import type { Metadata } from 'next'
import RecipePageLogic from './RecipePageLogic';

export function generateMetadata(): Metadata {
  return {
    title: `Recipe Page`,
  };
}

export default async function Page(props: any) {
  const { recipeId } = await props?.params
  const idAsNumber = Number(recipeId)

  return <RecipePageLogic recipeId={idAsNumber} />;
}
