import styled from "styled-components";

export const TN = styled.div`
  margin: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow:0 2px 10px rgba(0,0,0,.2);

  width: 150px;
  height: 150px;
  img {
    width: 130px;
    height: 130px;
  }
 
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    width: 300px;
    height: 300px;

    img {
      width: 280px;
      height: 280px;
    }
  }
`;
