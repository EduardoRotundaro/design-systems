import { FC, ReactNode } from "react";

type Backgrounds = '1' | '2' | '3' | '4' | '5' | 'black' | 'white';

type PageProps = {
  children: ReactNode,
  background?: Backgrounds,
};

export type SectionProps = {
  background?: Backgrounds,
};

export type PageType = FC<PageProps>;
