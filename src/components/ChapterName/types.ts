import { FC } from "react";

type ComponentProps = {
  children: string,
  light?: boolean,
};

export type ComponentType = FC<ComponentProps>;

export type ColorProps = {
  light?: boolean,
};
