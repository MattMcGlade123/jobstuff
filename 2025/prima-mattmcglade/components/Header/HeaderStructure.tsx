import React, { FC } from 'react';
import FavDropdown from '../FavDropdown';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  StyledHeader
} from './HeaderStyles';



const HeaderStructure: FC = () => {
  return (
    <StyledHeader data-testid="header">
      <h1>Recipe Lookup <FontAwesomeIcon icon={faUtensils} /></h1>
      <FavDropdown />
    </StyledHeader>
  );
};

export default HeaderStructure;
