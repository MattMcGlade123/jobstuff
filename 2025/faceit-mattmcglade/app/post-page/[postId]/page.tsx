import type { Metadata } from 'next'
import RecipePageLogic from './PostPageLogic';

export function generateMetadata(): Metadata {
  return {
    title: `Recipe Page`,
  };
}

export default async function Page(props: any) {
  const { postId } = await props?.params
  const idAsNumber = Number(postId)

  return <RecipePageLogic postId={idAsNumber} />;
}
