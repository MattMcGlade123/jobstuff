import React from 'react';

import { fireEvent, render } from '../../utils/test-utils';
import LikeStructure from './LikeStructure';

const handleClick = jest.fn()

const props = {
  handleClick,
  thisId: 2,
  isInList: false
}

describe('LikeStructure', () => {
  test('LikeStructure on click should trigger update', async () => {
    const { getByTestId } = render(<LikeStructure {...props} />);

    const like = getByTestId('likeButton');
    fireEvent.click(like);

    expect(handleClick).toHaveBeenCalled();
  });
});