import React from 'react';

import { fireEvent, render } from '../../utils/test-utils';
import LikeStructure from './LikeStructure';

const handleClick = jest.fn()

const props = {
  handleClick
}

describe('LikeStructure', () => {
  test('LikeStructure on click should trigger update', async () => {
    const { getByTestId } = render(<LikeStructure {...props} />);

    const like = getByTestId('like');
    fireEvent.click(like);

    expect(handleClick).toHaveBeenCalled();
  });
});