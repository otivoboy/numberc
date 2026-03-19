"use client";

import { useState } from 'react';
import { Preloader } from './Preloader';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onLoaded={() => setLoading(false)} />
      ) : (
        <>
          {children}
        </>
      )}
    </>
  );
};
