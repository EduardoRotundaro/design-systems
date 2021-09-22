import { FC } from "react";

type ItemConfigType = {
  text: string,
  action: () => void,
};

type ComponentProps = {
  items: Array<ItemConfigType>,
};

export type ComponentType = FC<ComponentProps>;
