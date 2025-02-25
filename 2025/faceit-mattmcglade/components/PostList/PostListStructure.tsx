import { Post } from '@/custom-type';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  StyledWrapper,
  StyledTitle,
  StyleAuthor
} from './PostListStyles';
import InfiniteScroll from 'react-infinite-scroll-component';

interface PostListStructureProps {
  currentList: Post[] | null;
  fetchMoreData: () => void;
}

const PostListStructure: FC<PostListStructureProps> = ({ currentList, fetchMoreData }) => {
  return (
    <StyledWrapper data-testid="PostList">
      {currentList && (
        <InfiniteScroll
          dataLength={currentList.length}
          next={fetchMoreData}
          hasMore={true}
          scrollThreshold={0.5}
          loader={<h4>Loading...</h4>}
        >
          {currentList?.map((thisListItem) => (
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
        </InfiniteScroll>
      )}
    </StyledWrapper>
  );
};

export default PostListStructure;
