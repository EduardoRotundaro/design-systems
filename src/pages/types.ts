import { FC, ReactElement } from "react";

type PageProps = {
  pageSetter?: (to: number) => void,
};

export type PageType = FC<PageProps>;

type PageData = {
  pageSetter: (to: number) => void,
  pageIndex: number,
};

export type PageGetterType = (props: PageData) => ReactElement;
