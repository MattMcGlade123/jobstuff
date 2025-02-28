import styled from 'styled-components';

export const StyledWrapper = styled.div<{ $highlight?: boolean }>`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: initial;
  }

  > div:first-child {
    background: ${({ theme, $highlight }) => $highlight ? theme.colors.red : 'none'};

    @media ${({ theme }) => theme.devices.large} {
      background: none;
      border: 1px solid ${({ theme, $highlight }) => $highlight ? theme.colors.red : theme.colors.grey};
    }
  }

  @media ${({ theme }) => theme.devices.large} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 2rem;
  }
`;

export const StyledItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  margin-bottom: 5rem;
  padding-bottom: 5rem;

  @media ${({ theme }) => theme.devices.large} {
    border: 1px solid ${({ theme }) => theme.colors.grey};
    padding: 1rem;
    margin: 0;
    box-sizing: border-box;
    flex-basis: calc(50% - 2rem);
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

export const StyledNewPost = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.grey};
  padding: 1rem;
  color: #fff;
`;