import styled from "styled-components";

export const Dialog = styled.div`
  display: block;
  width: 100%;
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding-top: 30px;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    padding-top: 50px;
  }
`;

export const Text = styled.span`
  display: block;
  text-align: center;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.black};
  font-weight: 600;
  font-size: 2.2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    font-size: 3.2rem;
  }
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 10px;

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: ${props => props.theme.colors.theme2};
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    padding: 6px 20px;
    border-radius: 8px;
    font-size: 1.4rem;

    &:hover {
      transform: scale(1.06);
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    padding-top: 50px;
    padding-bottom: 15px;

    button {
      font-size: 2rem;
    }
  }
`;
