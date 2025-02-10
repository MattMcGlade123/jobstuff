import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  position: relative;

  &:hover {
    > div {
      display: flex;
    }
  }
`;

export const StyledWrapperInner = styled.div`
  display: none;
  right: 0;
  top: 3rem;
  padding: 1.5rem 2rem;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.4rem 0.3rem 0px;

  @media ${({ theme }) => theme?.devices?.large} {
    min-width: 20rem;
  }
`;

export const StyleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  > li {
    margin-bottom: 1rem;
  }
`;

export const StyleIconWrapper = styled.div`
  position: relative;

  > svg {
    width: 3rem;
    height: 3rem;
    color: #D1D1D1
  }
`;

export const StyledCount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;