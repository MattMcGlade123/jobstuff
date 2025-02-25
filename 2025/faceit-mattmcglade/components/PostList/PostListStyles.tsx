import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: initial;
  }

  > div {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    margin-bottom: 2rem;

    @media ${({ theme }) => theme.devices.large} {
      border: 1px solid ${({ theme }) => theme.colors.grey};
      padding: 1rem;
      margin: 0;
      box-sizing: border-box;
      flex-basis: calc(25% - 2rem);
    }
  }

  @media ${({ theme }) => theme.devices.large} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 2rem;

    > div {
      border: 1px solid ${({ theme }) => theme.colors.grey};
      padding: 1rem;
      box-sizing: border-box;
      flex-basis: calc(25% - 2rem);
    }
  }
`;

export const StyledTitle = styled.p`
  font-size: 2rem;
  display: flex;

`;

export const StyleAuthor = styled.div`
  @media ${({ theme }) => theme.devices.large} {
    display: flex;
  }

  > img {
    @media ${({ theme }) => theme.devices.large} {
      max-width: 10rem;
      margin-right: 1rem;
    }
  }
`;