import React from 'react';

import { render } from '../../utils/test-utils';
import FavDropdown from './RecipeListStructure';

describe('FavDropdown', () => {
  test('FavDropdown to render', async () => {
    const { getByTestId } = render(<FavDropdown />);

    const header = getByTestId('data-testid');
    expect(header).toBeInTheDocument();
  });
});