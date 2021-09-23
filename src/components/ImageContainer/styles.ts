import styled from "styled-components";

import { ImageProps } from './types';

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img<ImageProps>`
  width: ${props => props.widthInMb};
  height: ${props => props.heightInMb};
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    width: ${props => props.widthInLg};
    height: ${props => props.heightInLg};
  }
`;
