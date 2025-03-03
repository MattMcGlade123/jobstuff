import React from 'react';

import { fireEvent, render } from '../../utils/test-utils';
import MockAddingItemStructure from './MockAddingItemStructure';

const addOne = jest.fn();

const props = {
  addOne
}

describe('MockAddingItem', () => {
  test('MockAddingItem to render', async () => {
    const { getByTestId } = render(<MockAddingItemStructure {...props} />);

    const addOneItem = getByTestId('add-one-item');
    expect(addOneItem).toBeInTheDocument();
  });

  test('on click triggers AddOne function to render', async () => {
    const { getByTestId } = render(<MockAddingItemStructure {...props} />);

    const addOneItem = getByTestId('add-one-trigger');
    fireEvent.click(addOneItem)
    expect(addOne).toHaveBeenCalled();
  });
});