'use client';

import { StyleContainer } from './HomeStyles';
import { FC } from 'react';
import RecipeList from '@/components/RecipeList';


const PageStructure: FC = () => {
  return (
    <StyleContainer>
      <RecipeList />
    </StyleContainer>
  );
}

export default PageStructure;
