import { FC } from "react";

type ComponentProps = {
  imageSrc: string,
  imageAlt: string,
  widthInMb: string,
  widthInLg: string,
  heightInMb: string,
  heightInLg: string,
};

export type ComponentType = FC<ComponentProps>;

export type ImageProps = {
  widthInMb: string,
  widthInLg: string,
  heightInMb: string,
  heightInLg: string,
};
