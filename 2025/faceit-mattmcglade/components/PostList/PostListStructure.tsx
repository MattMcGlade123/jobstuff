import { Post } from '@/custom-type';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  StyledWrapper,
  StyledTitle,
  StyleAuthor,
  StyledNewPost,
  StyledItem
} from './PostListStyles';
import InfiniteScroll from 'react-infinite-scroll-component';

interface PostListStructureProps {
  currentList: Post[] | null;
  fetchMoreData: () => void;
  showNewPost: boolean;
}

const PostListStructure: FC<PostListStructureProps> = ({ currentList, fetchMoreData, showNewPost }) => {
  return (
    <>
      {showNewPost && (
        <StyledNewPost>
          <p>New post has been added</p>
        </StyledNewPost>
      )}
      {currentList && (
        <InfiniteScroll
          dataLength={currentList.length}
          next={fetchMoreData}
          hasMore={true}
          scrollThreshold={0.9}
          loader={<h4>Loading...</h4>}
        >
          <StyledWrapper data-testid="postList" $highlight={showNewPost}>
            {currentList?.map((thisListItem, index) => (
              <StyledItem key={`${thisListItem.id}-${index}`} data-testid="postListItem">
                <Link href={`post-page/${thisListItem.id}`} key={thisListItem.id}>
                  <StyleAuthor>
                    <Image src={thisListItem.author.avatar} alt={thisListItem.author.name} width={200} height={200} />
                    <p>{thisListItem.author.name}</p>
                  </StyleAuthor>
                  <StyledTitle>{thisListItem.title}</StyledTitle>
                  {thisListItem.thisPostCappedText && <p>{thisListItem.thisPostCappedText}</p>}
                </Link>
              </StyledItem>
            ))}
          </StyledWrapper>
        </InfiniteScroll>
      )}
      {currentList?.length === 0 && (
        <StyledWrapper data-testid="PostListError">
          <p>Sorry no data is available currently, try again later</p>
        </StyledWrapper>
      )}
    </>
  );
};

export default PostListStructure;
