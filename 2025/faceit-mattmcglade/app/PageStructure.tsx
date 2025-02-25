'use client';

import { StyleContainer } from './HomeStyles';
import { FC } from 'react';
import PostList from '@/components/PostList';


const PageStructure: FC = () => {
  return (
    <StyleContainer>
      <PostList />
    </StyleContainer>
  );
}

export default PageStructure;
