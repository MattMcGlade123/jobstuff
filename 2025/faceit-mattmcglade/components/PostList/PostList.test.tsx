import React from 'react';

import { render } from '../../utils/test-utils';
import PostListStructure from './PostListStructure';
import { mockListData } from '@/mock-data/mock-list';

const fetchMoreData = jest.fn();

const props = {
  currentList: mockListData,
  fetchMoreData
}

const noResultsProps = {
  currentList: null,
  fetchMoreData
}

describe('PostList', () => {
  test('PostList to renders', async () => {
    const { getByTestId } = render(<PostListStructure {...props}  />);

    const PostList = getByTestId('PostList');
    expect(PostList).toBeInTheDocument();
  });

  test('Shows no results', async () => {
    const { getByText } = render(<PostListStructure {...noResultsProps} />);

    const noResultMessage = getByText('Sorry no data is available currently, try again later');
    expect(noResultMessage).toBeInTheDocument();
  });
});