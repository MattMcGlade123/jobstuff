'use client';

import React, { FC } from 'react';

import LikeLogicStructure from './LikeStructure';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavList, updateFavouriteList } from '@/features/favourites';
import { LikeProps } from '.';

const LikeLogicLogic: FC<LikeProps> = ({ thisId }) => {
  const dispatch = useDispatch();
  const currentFavList = useSelector(selectFavList);
  const isInList = currentFavList.includes(thisId);

  const handleClick = (newId: number) => {
    const isInList = currentFavList.includes(newId);
    const updatedList = isInList
      ? currentFavList.filter(id => id !== newId)
      : [...currentFavList, newId];

    dispatch(updateFavouriteList(updatedList));
  };

  const componentProps = {
    thisId,
    isInList,
    handleClick
  }

  return <LikeLogicStructure {...componentProps} />;
};

export default LikeLogicLogic;
