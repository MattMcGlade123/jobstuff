'use client';

import React, { useState } from 'react';

import FavDropdownStructure from './FavDropdownStructure';
import { useSelector } from 'react-redux';
import { selectFavList } from '@/features/favourites';
import { selectSiteData } from '@/features/siteData';

const FavDropdownLogic = () => {
  const [isActive, setIsActive] = useState(false)
  const favListIds = useSelector(selectFavList);
  const listData = useSelector(selectSiteData);
  const favList = listData?.filter(recipe => favListIds.includes(recipe.id));

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const componentProps = {
    favList,
    handleClick,
    isActive
  }

  return <FavDropdownStructure {...componentProps} />;
};

export default FavDropdownLogic;
