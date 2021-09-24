import styled from "styled-components";

import { SectionProps } from './types';

export const Section = styled.section<SectionProps>`
  background: ${props => {
    if (props.background === '1') return props.theme.colors.theme1;
    if (props.background === '2') return props.theme.colors.theme2;
    if (props.background === '3') return props.theme.colors.theme3;
    if (props.background === '4') return props.theme.colors.theme4;
    if (props.background === '5') return props.theme.colors.theme5;
    if (props.background === 'black') return props.theme.colors.black;
    return props.theme.colors.white;
  }};
`;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${props => props.theme.breakpoints.small}) {
    max-width: 540px;
  }
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    max-width: 720px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    max-width: 960px;
  }
  @media (min-width: ${props => props.theme.breakpoints.extraLarge}) {
    max-width: 1140px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
`;

export const Block = styled.div`
  padding: 50px 0px;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    padding: 50px 0px;
  }
`;
