'use client';

import { FC } from 'react';
import { selectSiteData } from '@/features/siteData';
import { useSelector } from 'react-redux';
import PostPageStructure from './PostPageStructure';


const PostPageLogic: FC<{ postId: number }> = ({ postId }) => {
  const allListData = useSelector(selectSiteData);
  const thisPost = allListData?.find((recipe) => recipe.id === Number(postId));

  const componentProps = {
    thisPost
  }

  return (
    <PostPageStructure {...componentProps} />
  );
};

export default PostPageLogic;
