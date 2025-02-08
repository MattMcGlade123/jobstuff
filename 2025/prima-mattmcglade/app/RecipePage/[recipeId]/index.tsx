import type { Metadata } from 'next'
import RecipePageLogic from './RecipePageLogic';

export function generateMetadata(params: { params: { id: number } }): Metadata {
  const orderId = params?.params?.id;
  return {
    title: `Recipe # ${orderId}`,
  };
}

export default async function Page({
  params,
}: {
  params: { id: number };
}) {

  return (
    <RecipePageLogic id={params.id} />
  );
}
