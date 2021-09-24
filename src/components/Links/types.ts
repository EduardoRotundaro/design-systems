import { FC } from "react";

type ItemConfigType = {
  text: string,
  link: string,
};

type ComponentProps = {
  items: Array<ItemConfigType>,
};

export type ComponentType = FC<ComponentProps>;
