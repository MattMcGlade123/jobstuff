'use client';

import React, { useState } from 'react';

import PostListStructure from './PostListStructure';
import { useSelector } from 'react-redux';
import { selectSiteData } from '@/features/siteData';
import { Post } from '@/custom-type';
import { fetchData } from '@/utils/fetchData';

const PostListLogic = () => {
  const siteData = useSelector(selectSiteData);
  const [currentList, setCurrentList] = useState<Post[] | null>(siteData);
  const [currentPage, setCurrentPage] = useState<number>(2);

  const fetchMoreData = async () => {
    const moreData = await fetchData(currentPage)
    setCurrentPage(currentPage + 1);

    if (currentList) {
      const newListData = [
        ...currentList,
        ...moreData.dataResponse
      ]
      setCurrentList(newListData)
    }
  }

  const componentProps = {
    currentList,
    fetchMoreData
  }

  return <PostListStructure {...componentProps} />;
};

export default PostListLogic;
