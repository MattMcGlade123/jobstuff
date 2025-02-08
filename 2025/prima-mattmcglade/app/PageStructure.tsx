'use client';

import SearchBox from '@/components/SearchBox';
import { StyleContainer } from './HomeStyles';
import { FC } from 'react';
import RecipeList from '@/components/RecipeList';


const PageStructure: FC = () => {
  return (
    <StyleContainer>
      <SearchBox />
      <RecipeList />
    </StyleContainer>
  );
}

export default PageStructure;
