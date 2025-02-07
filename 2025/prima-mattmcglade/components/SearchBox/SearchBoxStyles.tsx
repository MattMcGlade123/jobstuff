import styled from 'styled-components';


export const StyledWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;

  > svg {
    position: absolute;
    right: 1.8rem;
    top: 37%;
    font-size: 1.6rem;
  }
`;

export const StyledInput = styled.input`
  font-size: 1.6rem;
  padding: 1.5rem 3rem;
  border-radius: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);

  @media ${({ theme }) => theme.devices.large} {
    min-width: 30vw;
  }
`;
