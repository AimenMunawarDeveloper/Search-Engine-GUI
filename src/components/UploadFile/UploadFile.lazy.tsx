import React, { lazy, Suspense } from 'react';

const LazyUploadInput = lazy(() => import('./UploadFile'));

const SearchInput = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUploadInput {...props} />
  </Suspense>
);

export default SearchInput;
