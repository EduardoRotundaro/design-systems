import { FC } from "react";

type ComponentProps = {
  icon: 'college' | 'graduation' | 'location' | 'age',
  text: string,
};

export type ComponentType = FC<ComponentProps>;
