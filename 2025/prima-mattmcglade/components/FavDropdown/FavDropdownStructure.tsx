import { Recipe } from '@/custom-type';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { FC } from 'react';
import { StyledWrapper, StyledWrapperInner, StyleList, StyledCount, StyleIconWrapper } from './FavDropdownStyles';


interface FavListProps {
  favList: Recipe[] | undefined;
  handleClick: () => void,
  isActive: boolean
}

const FavDropdownStructure: FC<FavListProps> = ({
  favList,
  handleClick,
  isActive
}) => {
  return (
    <StyledWrapper data-testid="favDropdown">
      <StyleIconWrapper>
        <FontAwesomeIcon data-testid="favDropdownButton" icon={faHeart} onClick={() => handleClick()} />
        {favList && favList.length > 0 && (<StyledCount>{favList.length}</StyledCount>)}
      </StyleIconWrapper>
      <StyledWrapperInner $isActive={isActive}>
        {favList?.length === 0 && <p>You have no favourites saved</p>}
        <StyleList data-testid="favList">
          {favList?.map((thisFav) => (
            <li key={thisFav.id}>
              <Link href={`/recipe-page/${thisFav.id}`}>{thisFav.name}</Link>
            </li>
          ))}
        </StyleList>
      </StyledWrapperInner>
    </StyledWrapper>
  );
};

export default FavDropdownStructure;
