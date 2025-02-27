'use client';

import { FC } from 'react';
import { selectSiteData } from '@/features/siteData';
import { useSelector } from 'react-redux';
import PostPageStructure from './PostPageStructure';

const PostPageLogic: FC<{ postId: number }> = ({ postId }) => {
  // Get all data
  const allListData = useSelector(selectSiteData);
  /* 
    Filter the data for this post. We could do a seperate call with the ID to the endpoint
    but as already have the data, this would be an extra http call for no reason
  */
  const thisPost = allListData?.find((recipe) => recipe.id === Number(postId));

  const componentProps = {
    thisPost
  }

  return (
    <PostPageStructure {...componentProps} />
  );
};

export default PostPageLogic;
