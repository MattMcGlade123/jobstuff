import React from 'react';

import { cleanup, fireEvent, render } from '../../utils/test-utils';
import FavDropdown from './FavDropdownStructure';
import { mockFavList } from '@/mock-data/mock-favlist';

const handleClick = jest.fn();

const props = {
  favList: mockFavList,
  handleClick,
  isActive: false
}

const emptyProps = {
  favList: [],
  handleClick,
  isActive: false
}

describe('FavDropdown', () => {
  afterEach(() => {
    cleanup();
  });

  test('Should render basic component', async () => {
    const { getByTestId } = render(<FavDropdown {...props} />);

    const header = getByTestId('favDropdown');
    expect(header).toBeInTheDocument();
  });

  test('Should show no list if no data past', async () => {
    const { getByText } = render(<FavDropdown {...emptyProps} />);

    const noListMessage = getByText('You have no favourites saved');
    expect(noListMessage).toBeInTheDocument();
  });

  test('Should show list if data past', async () => {
    const { getByTestId } = render(<FavDropdown {...props} />);

    const favList = getByTestId('favList');
    expect(favList).toBeInTheDocument();
  });

  test('Should trigger handleClick when clicked', async () => {
    const { getByTestId } = render(<FavDropdown {...props} />);

    const trigger = getByTestId('favDropdownButton')

    fireEvent.click(trigger);

    expect(handleClick).toHaveBeenCalled();
  });
});