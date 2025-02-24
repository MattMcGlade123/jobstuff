'use client';

import { StyleContainer, StyledInner, StyledSubTitle, StyleIngList, StyleIngWrapper } from './PostPageStyles';
import { FC } from 'react';
import Image from 'next/image';
import { Post } from '@/custom-type';

interface PostPageStructureProps {
  thisPost: Post | undefined,
  thisPostCappedText: string;
}

const PostPageStructure: FC<PostPageStructureProps> = ({ thisPost, thisPostCappedText }) => {
  return (
    <StyleContainer data-testid="recipe-container">
      {thisPost === undefined && (
        <p>Sorry, theres not recipe for this ID</p>
      )}

      {thisPost && (
        <>
          <StyleAuthor>
            <Image data-testid="recipe-image" priority src={thisPost.author.avatar} alt={thisPost.author.name} width={500} height={400} />
            <p>{thisPost.author.name}</p>
          </StyleAuthor>
          <StyledContent>
            <h2>{thisPost.title}</h2>
            <p>{thisPostCappedText}</p>
          </StyledContent>
        </>
      )}

    </StyleContainer>
  );
}

export default PostPageStructure;
