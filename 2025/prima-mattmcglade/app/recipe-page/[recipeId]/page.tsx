import type { Metadata } from 'next'
import RecipePageLogic from './RecipePageLogic';

export function generateMetadata(params: { params: { id: number } }): Metadata {
  const orderId = params?.params?.id;
  return {
    title: `Recipe ${orderId}`,
  };
}

export default async function Page(props: { params: { recipeId: number } }) {
  const recipeId = props?.params?.recipeId;

  return <RecipePageLogic recipeId={recipeId} />;
}
