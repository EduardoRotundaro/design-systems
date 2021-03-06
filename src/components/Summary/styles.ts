import styled from "styled-components";

export const List = styled.ol`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  padding: 5px 0px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    padding: 10px 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

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
    padding-left: 5px;
    span {
      height: 50px;
      width: 50px;
      font-size: 20px;
      margin-right: 20px;
    }

    div {
      font-size: 2.8rem;
    }
  }
`;

export const Action = styled.div`
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    b {
      font-family: ${props => props.theme.fonts.primary};
      color: ${props => props.theme.colors.black};
      font-weight: 800;
    }

    svg {
      height: 20px;
      width: 20px;
      path {
        fill: ${props => props.theme.colors.black};
      }
    }

    &:hover {
      path {
        fill: ${props => props.theme.colors.white};
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    padding-right: 5px;
    button {
      b {
        font-size: 14px;
        margin-right: 5px;
      }
      svg {
        height: 22px;
        width: 22px;
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.large}) {
    padding-left: 10px;
    button {
      b {
        display: none;
      }
    }
  }
`;
