'use client';

import { StyleAuthor, StyleContainer } from './PostPageStyles';
import { FC } from 'react';
import Image from 'next/image';
import { Post } from '@/custom-type';

interface PostPageStructureProps {
  thisPost: Post | undefined
}

const PostPageStructure: FC<PostPageStructureProps> = ({ thisPost }) => {
  return (
    <StyleContainer data-testid="post-container">
      {thisPost === undefined && (
        <p>Sorry, theres not post for this ID</p>
      )}

      {thisPost && (
        <>
          <StyleAuthor data-testid="post-author">
            <Image data-testid="post-author-image" priority src={thisPost.author.avatar} alt={thisPost.author.name} width={500} height={400} />
            <p data-testid="post-author-name">{thisPost.author.name}</p>
          </StyleAuthor>
          <div data-testid="post-content">
            <h2>{thisPost.title}</h2>
            <p>{thisPost.body}</p>
          </div>
        </>
      )}

    </StyleContainer>
  );
}

export default PostPageStructure;
