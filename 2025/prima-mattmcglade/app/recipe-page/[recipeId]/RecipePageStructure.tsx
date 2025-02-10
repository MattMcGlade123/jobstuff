'use client';

import { StyleContainer, StyledInner, StyledTitle, StyleIngList } from './RecipePageStyles';
import { FC } from 'react';
import Image from 'next/image';
import { Recipe } from '@/custom-type';
import Like from '@/components/Like';

interface RecipePageStructureProps {
  thisRecipe: Recipe | undefined
}

const RecipePageStructure: FC<RecipePageStructureProps> = ({ thisRecipe }) => {
  return (
    <StyleContainer data-testid="recipe-container">
      {thisRecipe === undefined && (
        <p>Sorry, theres not recipe for this ID</p>
      )}

      {thisRecipe && (
        <>
          <StyledTitle data-testid="recipe-name">{thisRecipe.name} <Like thisId={thisRecipe.id} /></StyledTitle>
          <StyledInner>
            <Image data-testid="recipe-image" src={thisRecipe.image} alt={thisRecipe.name} width={500} height={400} />
            <div>
              <h3>Ingredients</h3>
              <StyleIngList>
                {thisRecipe.ingredients.map((thisIngredient) => (
                  <li key={thisIngredient}>{thisIngredient}</li>
                ))}
              </StyleIngList>
            </div>
          </StyledInner>
          <h3>Cooking Instructions</h3>
          <p data-testid="recipe-instructions">{thisRecipe.instructions}</p>
        </>
      )}

    </StyleContainer>
  );
}

export default RecipePageStructure;
