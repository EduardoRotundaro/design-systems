import { PageGetterType } from './types';

import Cover from './Cover';
import Author from './Author';
import About from './About';
import Summary from './Summary';
import Part1 from './Part1';

export const getPage: PageGetterType = function (props) {
  const { pageIndex, pageSetter } = props;

  if (pageIndex === 0) return <Cover />;
  if (pageIndex === 1) return <Author />;
  if (pageIndex === 2) return <About />;
  if (pageIndex === 3) return <Summary pageSetter={pageSetter} />;
  if (pageIndex === 4) return <Part1 />;
  return <div></div>;
};

export const pagesLength = 5;
