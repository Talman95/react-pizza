import { ComponentType, Suspense } from 'react';

export const withSuspense = (Component: ComponentType): ComponentType => {
  return () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};
