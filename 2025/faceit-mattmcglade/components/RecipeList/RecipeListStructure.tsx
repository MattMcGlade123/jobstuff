import { Post } from '@/custom-type';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  StyledWrapper,
  StyledTitle
} from './RecipeListStyles';

interface RecipeListStructureProps {
  currentList: Post[] | null;
  showNoResults: boolean;
}

const RecipeListStructure: FC<RecipeListStructureProps> = ({ currentList, showNoResults }) => {
  return (
    <StyledWrapper data-testid="recipeList">
      {currentList && currentList?.map((thisListItem) => (
        <div key={thisListItem.id}>
          <StyledTitle>{thisListItem.name}</StyledTitle>

          <Link href={`recipe-page/${thisListItem.id}`} key={thisListItem.id}>
            <Image src={thisListItem.image} alt={thisListItem.name} width={200} height={200} />
          </Link>
        </div>
      ))}
      {showNoResults && <p>Sorry there were no results for that search</p>}
    </StyledWrapper>
  );
};

export default RecipeListStructure;
