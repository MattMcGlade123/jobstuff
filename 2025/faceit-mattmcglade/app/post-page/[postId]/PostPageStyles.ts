import styled from 'styled-components';

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10vw;
`;

export const StyleAuthor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${({ theme }) => theme.devices.large} {
    width: 20vw;
  }

  > img {
    width: 100%;
    height: auto;
  }
`;
