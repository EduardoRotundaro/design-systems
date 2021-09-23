import packageInfos from '../../package.json';

import { ComponentsThemeType, ConstantType } from './types';

export const APP_VERSION: ConstantType = packageInfos.version;

export const THEME: ComponentsThemeType = {
  colors: {
    theme1: '#00d8d6',
    theme2: '#0fbcf9',    
    theme3: '#ffdd59',
    theme4: '#ffc048',
    theme5: '#05c46b',
    white: '#FDFEFE',
    gray: '#ECF0F1',
    black: '#17202A',
  },
  fonts: {
    primary: '\'Lato\', sans-serif',
    secondary: 'Tahoma, sans-serif',
  },
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
    extraLarge: '1224px',
    fullHD: '1824px',
  },
};
