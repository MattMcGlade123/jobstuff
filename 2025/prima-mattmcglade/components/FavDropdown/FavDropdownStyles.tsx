import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${({ theme }) => theme.devices.large} {
    position: absolute;
    top: 2rem;
    right: 2rem;
    &:hover {
      > div {
        display: flex;
      }
    }
  }
`;

export const StyledWrapperInner = styled.div<{ $isActive: boolean }>`
  display: none;
  padding: 1.5rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.4rem 0.3rem 0px;
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
  min-width: 20rem;

  @media ${({ theme }) => theme.devices.large} {
    position: absolute;
    right: 0;
    top: 3rem;
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
  left: 0;

  @media ${({ theme }) => theme.devices.large} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;