import React from 'react';

import { cleanup, render } from '../../../utils/test-utils';
import PostPageStructure from './PostPageStructure';
import { Post } from '@/custom-type';

const mockPost: Post = {
  id: 1,
  title: "His mother had always taught him",
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  tags: [
    "history",
    "american",
    "crime"
  ],
  reactions: {
    likes: 192,
    dislikes: 25
  },
  views: 305,
  userId: 121,
  author: {
    name: 'Bob Smith',
    avatar: 'https://www.url.com'
  }
}

const mockProps = {
  thisPost: mockPost,
}

describe('PostPageStructure', () => {
  afterEach(() => {
    cleanup();
  });

  test('PostPageStructure to render all components', async () => {
    const { getByTestId } = render(<PostPageStructure {...mockProps} />);

    const container = getByTestId('post-container');
    const author = getByTestId('post-author');
    const authorImage = getByTestId('post-author-image');
    const authorName = getByTestId('post-author-name');
    const postContent = getByTestId('post-content');

    expect(container).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(authorImage).toBeInTheDocument();
    expect(authorName).toBeInTheDocument();
    expect(postContent).toBeInTheDocument();
  });

  test('PostPageStructure to render error if theres no Post', async () => {
    const { getByText } = render(<PostPageStructure thisPost={undefined} />);

    const errorMessage = getByText('Sorry, theres not post for this ID');

    expect(errorMessage).toBeInTheDocument();
  });
});