import React, { lazy, Suspense } from 'react';

const LazySearchResult = lazy(() => import('./SearchResult'));

const SearchResult = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySearchResult {...props} />
  </Suspense>
);

export default SearchResult;
