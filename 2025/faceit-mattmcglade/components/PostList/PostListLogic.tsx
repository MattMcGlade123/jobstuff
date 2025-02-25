'use client';

import React, { useEffect, useState } from 'react';

import PostListStructure from './PostListStructure';
import { useSelector } from 'react-redux';
import { selectNoResults, selectSiteData } from '@/features/siteData';

const PostListLogic = () => {
  const siteData = useSelector(selectSiteData);
  const noResult = useSelector(selectNoResults);
  const [showNoResults, setShowNoResults] = useState<boolean>(false);

  const [currentList, setCurrentList] = useState(siteData)

  useEffect(() => {
    setShowNoResults(noResult);
  }, [noResult])

  const componentProps = {
    currentList,
    showNoResults
  }

  return <PostListStructure {...componentProps} />;
};

export default PostListLogic;
