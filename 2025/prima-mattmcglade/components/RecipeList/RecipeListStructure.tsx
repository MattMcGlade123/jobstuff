import { Recipe } from '@/custom-type';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import {
//   StyledHeader
// } from './RecipeListStyles';

interface RecipeListStructureProps {
  currentList: Recipe[] | null;
  showNoResults: boolean;
}

const RecipeListStructure: FC<RecipeListStructureProps> = ({ currentList, showNoResults }) => {
  return (
    <div data-testid="RecipeList">
      {currentList && currentList.map((thisListItem) => (
        <Link href={`recipe-page/${thisListItem.id}`} key={thisListItem.id}>
          <p>{thisListItem.name}</p>
          <Image src={thisListItem.image} alt={thisListItem.name} width={200} height={200} />
        </Link>
      ))}
      {showNoResults && <p>Sorry there were no results for that search</p>}
    </div>
  );
};

export default RecipeListStructure;
