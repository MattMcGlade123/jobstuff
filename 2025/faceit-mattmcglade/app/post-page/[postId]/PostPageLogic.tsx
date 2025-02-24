'use client';

import { FC } from 'react';
import { selectSiteData } from '@/features/siteData';
import { useSelector } from 'react-redux';
import PostPageStructure from './PostPageStructure';


const PostPageLogic: FC<{ postId: number }> = ({ postId }) => {
  const allListData = useSelector(selectSiteData);
  const thisPost = allListData?.find((recipe) => recipe.id === Number(postId));
  const thisPostCappedText = thisPost.body.length > 100 ? thisPost.body.slice(0, 100) + "..." : thisPost.body;

  const componentProps = {
    thisPost,
    thisPostCappedText
  }

  return (
    <PostPageStructure {...componentProps} />
  );
};

export default PostPageLogic;
