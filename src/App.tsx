import { FC, useState } from 'react';

import { getPage, pagesLength } from './pages';
import NavigationButton from './components/NavigationButton';

const App: FC = function () {
  const [page, setPage] = useState(0);

  const nextAction = function () {
    if (page < (pagesLength - 1)) setPage(page + 1);
  };

  const prevAction = function () {
    if (page) setPage(page - 1);
  };

  return (
    <main>
      {!!page && (
        <NavigationButton
          action="prev"
          disabled={false}
          onClick={prevAction}
        />
      )}
      {getPage( { pageIndex: page, pageSetter: (to) => setPage(to) } )}
      {(page < (pagesLength - 1)) && (
        <NavigationButton 
          action="next"
          disabled={false}
          onClick={nextAction}
        />
      )}
    </main>
  );
};

export default App;
