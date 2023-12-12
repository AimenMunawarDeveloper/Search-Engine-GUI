import React, { lazy, Suspense } from 'react';

const LazySearchResultItem = lazy(() => import('./SearchResultItem'));

const SearchResultItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySearchResultItem {...props} />
  </Suspense>
);

export default SearchResultItem;
