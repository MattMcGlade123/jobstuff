'use client';

import { StyleContainer } from './RecipePageStyles';
import { FC } from 'react';
import Image from 'next/image';
import { Recipe } from '@/custom-type';

interface RecipePageStructureProps {
  thisRecipe: Recipe | undefined
}

/*

detailed information, including ingredients,
instructions, and preparation time.

*/

const RecipePageStructure: FC<RecipePageStructureProps> = ({ thisRecipe }) => {
  return (
    <StyleContainer data-testid="recipe-container">
      {thisRecipe === undefined && (
        <p>Sorry, theres not recipe for this ID</p>
      )}

      {thisRecipe && (
        <>
          <h2 data-testid="recipe-name">{thisRecipe.name}</h2>
          <Image data-testid="recipe-image" src={thisRecipe.image} alt={thisRecipe.name} width={500} height={400} />
          <h3>Ingredients</h3>
          <ul>
            {thisRecipe.ingredients.map((thisIngredient) => (
              <li key={thisIngredient}>{thisIngredient}</li>
            ))}
          </ul>
          <p data-testid="recipe-ingredients">{thisRecipe.ingredients}</p>
          <h3>Cooking Instructions</h3>
          <p data-testid="recipe-instructions">{thisRecipe.instructions}</p>
        </>
      )}

    </StyleContainer>
  );
}

export default RecipePageStructure;
