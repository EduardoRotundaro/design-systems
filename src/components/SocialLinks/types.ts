import { FC } from "react";

type SocialTypes = 'linkedin' | 'instagram' | 'github' | 'gmail';

type ItemConfigType = {
  type: SocialTypes,
  link: string, 
  ariaLabel: string,
};

type ComponentProps = {
  links: Array<ItemConfigType>,
};

export type ComponentType = FC<ComponentProps>;

export type ContactItemProps = {
  type: SocialTypes,
};
