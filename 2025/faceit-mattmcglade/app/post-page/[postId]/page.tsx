import type { Metadata } from 'next'
import PostPageLogic from './PostPageLogic';

export function generateMetadata(): Metadata {
  return {
    title: `Post Page`,
  };
}

export default async function Page(props: any) {
  const { postId } = await props?.params
  const idAsNumber = Number(postId)

  return <PostPageLogic postId={idAsNumber} />;
}
