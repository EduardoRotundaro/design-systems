import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Badge = styled.span`
  font-family: ${props => props.theme.fonts.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  font-weight: 800;
  background: #000000;
  background: -webkit-linear-gradient(to right, #434343, #000000);
  background: linear-gradient(to right, #434343, #000000);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    height: 100px;
    width: 100px;
    font-size: 36px;
  }
`;
