'use client';

import { FC } from 'react';
import { selectListData } from '@/features/siteData';
import { useSelector } from 'react-redux';
import RecipePageStructure from './RecipePageStructure';


const RecipePageLogic: FC<{ recipeId: number }> = ({ recipeId }) => {
  const allListData = useSelector(selectListData);
  const thisRecipe = allListData?.find((recipe) => recipe.id === recipeId);

  const componentProps = {
    thisRecipe
  }

  return (
    <RecipePageStructure {...componentProps} />
  );
};

export default RecipePageLogic;
