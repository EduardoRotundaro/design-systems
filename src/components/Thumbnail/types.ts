import { FC } from 'react';

type ComponentProps = {
  imageSrc: string,
  imageAlt: string,
};

export type ComponentType = FC<ComponentProps>;
