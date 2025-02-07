'use client';

import SearchBox from '@/components/SearchBox';
import { Container } from './HomeStyles';
import { FC } from 'react';
import RecipeList from '@/components/RecipeList';


const PageStructure: FC = () => {
  return (
    <Container>
      <SearchBox />
      <RecipeList />
    </Container>
  );
}

export default PageStructure;
