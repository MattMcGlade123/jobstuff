import styled from 'styled-components';

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInner = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 100%;
    object-fit: cover;

    @media ${({ theme }) => theme.devices.large} {
      width: 80%;
      margin-right: 3rem;
    }
  }
`;

export const StyleIngList = styled.ul`
  list-style: none;
  padding: 0%;
  margin: 0;
`;

export const StyledTitle = styled.h2`
  font-size: 2rem;
`;