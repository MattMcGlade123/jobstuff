import styled from 'styled-components';

import Button from '../../../basic/Buttons';

export const StyledEditButton = styled(Button)`
  padding: 0.6rem 3rem;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
`;

export const StyledTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: ${({ theme }) => theme.checkout.emailForm.guestTitle.case};
  margin: 0 0 2rem;
  padding-right: 7rem;
`;

export const StyledDetails = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  margin: 0 0 1rem;
`;

export const StyledAddressList = styled.div`
  position: relative;
`;

export const StyledCandCPrice = styled.span`  
  font-size: 1.4rem;
  display: block;
  margin-top: 1rem;
`;
