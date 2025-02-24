import styled from 'styled-components';


export const StyledWrapper = styled.span<{ $isInList: boolean }>`
  margin: 0 auto;

  > svg {
    color: ${({ $isInList, theme }) => ($isInList ? theme.colors.red : theme.colors.grey)};
    cursor: pointer;
  }
`;
