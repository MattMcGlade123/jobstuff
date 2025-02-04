import React from 'react';

import { render } from '@testing-library/react';
import SearchBoxStructure from './SearchBoxStructure';

const props = {
  currentSearchValue: "hello",
  handleChange: jest.fn()
}

describe('SearchBoxStructure', () => {
  test('SearchBoxStructure to render', async () => {
    const { getByTestId } = render(<SearchBoxStructure {...props} />);

    const searchBox = getByTestId('searchBox');
    expect(searchBox).toBeInTheDocument();
  });
});