'use client'

import React, { FC } from 'react';

import {
  StyledWrapper,
  StyledButton
} from './MockAddingItemStyles';

interface MockAddingItemStructureProps {
  addOne: () => void
}

const MockAddingItemStructure: FC<MockAddingItemStructureProps> = ({ addOne }) => {
  return (
    <StyledWrapper data-testid="add-one-item">
      <StyledButton type="button" data-testid="add-one-trigger" onClick={() => addOne()}>Add a new post</StyledButton>
    </StyledWrapper>
  );
};

export default MockAddingItemStructure;
