'use client'

import React, { FC } from 'react';
import FavDropdown from '../FavDropdown';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  StyledHeader
} from './HeaderStyles';
import Link from 'next/link';

const HeaderStructure: FC = () => {
  return (
    <StyledHeader data-testid="header">
      <Link href={'/'}><h1>Recipe Lookup <FontAwesomeIcon icon={faUtensils} /></h1></Link>
    </StyledHeader>
  );
};

export default HeaderStructure;
