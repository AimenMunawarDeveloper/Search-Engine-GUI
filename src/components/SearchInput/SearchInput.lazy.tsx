import React, { lazy, Suspense } from 'react';

const LazySearchInput = lazy(() => import('./SearchInput'));

const SearchInput = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySearchInput {...props} />
  </Suspense>
);

export default SearchInput;
