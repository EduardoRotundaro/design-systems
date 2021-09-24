import styled from "styled-components";

import { ContactItemProps } from './types';

export const Social = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialItem = styled.a<ContactItemProps>`
  text-decoration: none !important;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0px 10px;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s linear 0s, border-radius 0.2s linear 0.2s;
  background: ${props => {
    if (props.type === 'instagram') return 'linear-gradient(20deg,  	#feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)';
    if (props.type === 'github') return '#0d1117';
    if (props.type === 'gmail') return '#d93025';
    if (props.type === 'linkedin') return '#007bb6';
    return '#000';
  }};

  svg {
    position: relative;
    z-index: 3;
    transition: transform 0.2s linear 0s;
    width: 26px;
    height: 26px;
  }

  &:hover {
    transform: rotate(-90deg);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;

    svg {
      transform: rotate(90deg);
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    width: 60px;
    height: 60px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;
