import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  top: 2vh;
  right: 2vh;

  @media ${({ theme }) => theme.devices.large} {
    top: 5vh;
    right: 10vh;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;