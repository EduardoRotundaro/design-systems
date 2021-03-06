import styled from "styled-components";

import { ColorProps } from './types';

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.span<ColorProps>`
  background: ${props => {
    if (props.light) return '#b2babb';
    return '#485460';
  }};
  height: 2px;
  width: 20px;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    width: 100px;
  }
`;

export const Title = styled.h3<ColorProps>`
  color: ${props => {
    if (props.light) return '#b2babb';
    return '#485460';
  }};
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: 600;
  margin: 0px 6px;
  font-size: 1.3rem;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    margin: 0px 15px;
    font-size: 1.6rem;
  }
`;
