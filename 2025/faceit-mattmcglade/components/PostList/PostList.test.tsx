import React from 'react';

import { act, render } from '../../utils/test-utils';
import PostListStructure from './PostListStructure';
import { mockListData } from '@/mock-data/mock-list';

const fetchMoreData = jest.fn();

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

const props = {
  currentList: mockListData,
  fetchMoreData,
  showNewPost: false
}

const noResultsProps = {
  currentList: [],
  fetchMoreData,
  showNewPost: false
}

const newPostprops = {
  currentList: mockListData,
  fetchMoreData,
  showNewPost: true
}


describe('PostList', () => {
  test('PostList to renders', async () => {
    const { getByTestId } = render(<PostListStructure {...props} />);

    const postList = getByTestId('postList');
    expect(postList).toBeInTheDocument();
  });

  test('on load should have 20 posts', async () => {
    const { queryAllByTestId } = render(<PostListStructure {...props} />);

    const postListItems = queryAllByTestId('postListItem');
    expect(postListItems).toHaveLength(20);
  });

  it('calls fetchMoreData when scrolled near bottom', async () => {
    render(<PostListStructure {...props} />);
    act(() => {
      Object.defineProperty(window, 'scrollHeight', { configurable: true, value: 1000 });
      Object.defineProperty(window, 'clientHeight', { configurable: true, value: 500 });
      Object.defineProperty(window, 'scrollTop', { configurable: true, value: 900 });

      window.dispatchEvent(new Event('scroll'));
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(fetchMoreData).toHaveBeenCalled();
  });

  test('Shows no results', async () => {
    const { getByText } = render(<PostListStructure {...noResultsProps} />);

    const noResultMessage = getByText('Sorry no data is available currently, try again later');
    expect(noResultMessage).toBeInTheDocument();
  });

  test('Shows a new post message', async () => {
    const { getByText } = render(<PostListStructure {...newPostprops} />);

    const newPostMessage = getByText('New post has been added');
    expect(newPostMessage).toBeInTheDocument();
  });
});