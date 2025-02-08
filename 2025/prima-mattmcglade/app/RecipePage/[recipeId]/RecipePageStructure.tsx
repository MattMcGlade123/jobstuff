'use client';

import SearchBox from '@/components/SearchBox';
import { StyleContainer } from './RecipePageStyles';
import { FC } from 'react';
import RecipeList from '@/components/RecipeList';
import { Recipe } from '@/custom-type';

interface RecipePageStructureProps {
  thisRecipe: Recipe
}

const RecipePageStructure: FC<RecipePageStructureProps> = () => {
  return (
    <StyleContainer>

    </StyleContainer>
  );
}

export default RecipePageStructure;
