import { FC, useState } from 'react';

import pages from './pages';
import NavigationButton from './components/NavigationButton';

const App: FC = function () {
  const [page, setPage] = useState(0);

  const nextAction = function () {
    if (page < (pages.length - 1)) setPage(page + 1);
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
      {pages[page]}
      {(page < (pages.length - 1)) && (
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
