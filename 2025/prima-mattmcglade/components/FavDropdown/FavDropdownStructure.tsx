import { Recipe } from '@/custom-type';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { FC } from 'react';
import { StyledWrapper, StyledWrapperInner, StyleList, StyledCount, StyleIconWrapper } from './FavDropdownStyles';


interface FavListProps {
  favList: Recipe[] | undefined;
}

const FavDropdownStructure: FC<FavListProps> = ({ favList }) => {
  return (
    <StyledWrapper data-testid="favDropdown">
      <StyleIconWrapper>
        <FontAwesomeIcon icon={faHeart} />
        {favList && favList.length > 0 && (<StyledCount>{favList.length}</StyledCount>)}
      </StyleIconWrapper>
      <StyledWrapperInner>
        {favList?.length === 0 && <p>You have no favourites saved</p>}
        <StyleList data-testid="favList">
          {favList?.map((thisFav) => (
            <Link href={`/recipe-page/${thisFav.id}`} key={thisFav.id}>{thisFav.name}</Link>
          ))}
        </StyleList>
      </StyledWrapperInner>
    </StyledWrapper>
  );
};

export default FavDropdownStructure;
