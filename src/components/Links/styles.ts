import styled from "styled-components";

export const List = styled.ol`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  padding: 10px 0px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;

  span {
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
    height: 30px;
    width: 30px;
    min-width: 30px;
    font-size: 12px;
    margin-right: 8px;
  }

  div {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    font-size: 1.6rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    span {
      height: 50px;
      width: 50px;
      font-size: 20px;
      margin-right: 20px;
    }

    div {
      font-size: 2.2rem;
    }
  }
`;

export const Action = styled.div`
  padding-right: 5px;
  padding-left: 10px;

  a {
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: #000000;
    background: -webkit-linear-gradient(to right, #434343, #000000);
    background: linear-gradient(to right, #434343, #000000);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 50px;
    height: 30px;
    width: 30px;

    &:visited {
      color: ${props => props.theme.colors.white};
    }

    b {
      font-family: ${props => props.theme.fonts.secondary};
      color: ${props => props.theme.colors.white};
      font-weight: 800;
      font-size: 12px;
    }

    &:hover {
      text-decoration: none;

      b {
        color: ${props => props.theme.colors.theme2};
      }
    }
    
    @media (min-width: ${props => props.theme.breakpoints.large}) {
      height: 50px;
      width: 50px;
    }
  }
`;
