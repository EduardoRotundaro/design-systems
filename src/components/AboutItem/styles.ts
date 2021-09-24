import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    text-align: center;
    font-size: 1.4rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    svg {
      height: 28px;
      width: 28px;
      margin-right: 10px;
    }
    span {
      font-size: 2.2rem;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.large}) {
    svg {
      display: none;
    }
  }
`;
