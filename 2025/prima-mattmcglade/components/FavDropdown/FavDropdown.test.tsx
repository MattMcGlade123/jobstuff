import React from 'react';

import { fireEvent, render } from '../../utils/test-utils';
import FavDropdown from './FavDropdownStructure';
import { mockFavList } from '@/mock-data/mock-favlist';

const handleClick = jest.fn();

const props = {
  favList: mockFavList,
  handleClick
}

describe('FavDropdown', () => {
  test('Should render basic component', async () => {
    const { getByTestId } = render(<FavDropdown {...props} />);

    const header = getByTestId('favDropdown');
    expect(header).toBeInTheDocument();
  });

  test('Should show no list if no data past', async () => {
    const { getByText } = render(<FavDropdown favList={[]} />);

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

    const trigger = getByTestId('favIcon')

    fireEvent.click(trigger);

    expect(handleClick).toHaveBeenCalled();
  });
});