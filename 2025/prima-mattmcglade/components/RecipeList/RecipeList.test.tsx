import React from 'react';

import { render } from '../../utils/test-utils';
import RecipeList from './RecipeListStructure';
import { mockFavList } from '@/mock-data/mock-favlist';

const props = {
  currentList: mockFavList,
  showNoResults: false
}

const noResultsProps = {
  currentList: null,
  showNoResults: true
}

describe('RecipeList', () => {
  test('RecipeList to renders', async () => {
    const { getByTestId } = render(<RecipeList {...props}  />);

    const recipeList = getByTestId('recipeList');
    expect(recipeList).toBeInTheDocument();
  });

  test('Shows no results', async () => {
    const { getByText } = render(<RecipeList {...noResultsProps} />);

    const noResultMessage = getByText('Sorry there were no results for that search');
    expect(noResultMessage).toBeInTheDocument();
  });
});