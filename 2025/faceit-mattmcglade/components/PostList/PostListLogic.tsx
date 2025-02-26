'use client';

import React, { useState } from 'react';

import PostListStructure from './PostListStructure';
import { useDispatch, useSelector } from 'react-redux';
import { selectPageNumber, selectSiteData, updateCurrentPageNumber, updateSiteData } from '@/features/siteData';
import { Post } from '@/custom-type';
import { fetchData } from '@/utils/fetchData';

const PostListLogic = () => {
  const siteData = useSelector(selectSiteData);
  const currentPageNumber = useSelector(selectPageNumber);
  const dispatch = useDispatch();
  const [currentList, setCurrentList] = useState<Post[] | null>(siteData);

  const fetchMoreData = async () => {
    const moreData = await fetchData(currentPageNumber);
    const newNumber = currentPageNumber + 1

    if (currentList) {
      const newListData = [
        ...currentList,
        ...moreData.dataResponse
      ]
      dispatch(updateSiteData(newListData))
      dispatch(updateCurrentPageNumber(newNumber))
      setCurrentList(newListData);
    }
  }

  const componentProps = {
    currentList,
    fetchMoreData
  }

  return <PostListStructure {...componentProps} />;
};

export default PostListLogic;
