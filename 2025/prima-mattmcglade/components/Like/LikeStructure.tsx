import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart

} from '@fortawesome/free-solid-svg-icons'

import {
  StyledWrapper,
} from './LikeStyles';

interface DeliveryInformationInterface {
  thisId: number;
  isInList: boolean;
  handleClick: (param: number) => void;
}

const LikeStructure: FC<DeliveryInformationInterface> = ({
  thisId,
  isInList,
  handleClick
}) => {
  return (
    <StyledWrapper data-testid="like" $isInList={isInList}>
      <FontAwesomeIcon data-testid="likeButton" icon={faHeart} onClick={() => handleClick(thisId)} />
    </StyledWrapper>
  );
};

export default LikeStructure;
