import { PageGetterType } from './types';

import Cover from './Cover';
import Author from './Author';
import About from './About';
import Summary from './Summary';
import Part1 from './Part1';
import Part1P1 from './Part1P1';
import Part1P2 from './Part1P2';
import Part1P3 from './Part1P3';
import Part2 from './Part2';
import Part2P1 from './Part2P1';
import Part2P2 from './Part2P2';
import Part2P3 from './Part2P3';
import Part2P4 from './Part2P4';
import Part2P5 from './Part2P5';
import Part2P6 from './Part2P6';

export const getPage: PageGetterType = function (props) {
  const { pageIndex, pageSetter } = props;

  if (pageIndex === 0) return <Cover />;
  if (pageIndex === 1) return <Author />;
  if (pageIndex === 2) return <About />;
  if (pageIndex === 3) return <Summary pageSetter={pageSetter} />;
  if (pageIndex === 4) return <Part1 />;
  if (pageIndex === 5) return <Part1P1 />;
  if (pageIndex === 6) return <Part1P2 />;
  if (pageIndex === 7) return <Part1P3 />;
  if (pageIndex === 8) return <Part2 />;
  if (pageIndex === 9) return <Part2P1 />;
  if (pageIndex === 10) return <Part2P2 />;
  if (pageIndex === 11) return <Part2P3 />;
  if (pageIndex === 12) return <Part2P4 />;
  if (pageIndex === 13) return <Part2P5 />;
  if (pageIndex === 14) return <Part2P6 />;
  return <div></div>;
};

export const pagesLength = 15;
