'use client';

import React from 'react';

import FavDropdownStructure from './FavDropdownStructure';
import { useSelector } from 'react-redux';
import { selectFavList } from '@/features/favourites';
import { selectSiteData } from '@/features/siteData';

const FavDropdownLogic = () => {
  const favListIds = useSelector(selectFavList);
  const listData = useSelector(selectSiteData);
  const favList = listData?.filter(recipe => favListIds.includes(recipe.id));

  return <FavDropdownStructure favList={favList} />;
};

export default FavDropdownLogic;
