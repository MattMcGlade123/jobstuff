import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media ${({ theme }) => theme.devices.large} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    > div {
      min-width: 24%;

      img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: initial;
      }
    }
  }
`;

export const StyledTitle = styled.p`
  font-size: 2rem;
  display: flex;

  > span {
    margin: 0 0 0 auto;
  }
`;