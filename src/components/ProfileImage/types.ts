import { FC } from "react";

type ComponentProps = {
  imageSrc: string,
  profileName: string,
};

export type ComponentType = FC<ComponentProps>;
