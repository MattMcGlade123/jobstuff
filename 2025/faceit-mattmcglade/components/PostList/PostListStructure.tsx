import { Post } from '@/custom-type';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  StyledWrapper,
  StyledTitle,
  StyleAuthor
} from './PostListStyles';

interface PostListStructureProps {
  currentList: Post[] | null;
  showNoResults: boolean;
}

const PostListStructure: FC<PostListStructureProps> = ({ currentList, showNoResults }) => {
  return (
    <StyledWrapper data-testid="PostList">
      {currentList && currentList?.map((thisListItem) => (
        <div key={thisListItem.id}>
          <Link href={`post-page/${thisListItem.id}`} key={thisListItem.id}>
            <StyleAuthor>
              <Image src={thisListItem.author.avatar} alt={thisListItem.author.name} width={200} height={200} />
              <p>{thisListItem.author.name}</p>
            </StyleAuthor>
            <StyledTitle>{thisListItem.title}</StyledTitle>
            {thisListItem.thisPostCappedText && <p>{thisListItem.thisPostCappedText}</p>}
          </Link>
        </div>
      ))}
      {showNoResults && <p>Sorry there were no results for that search</p>}
    </StyledWrapper>
  );
};

export default PostListStructure;
