"use client";

import dynamic from 'next/dynamic';

const WhatsAppButtonWithNoSSR = dynamic(
  () => import('./WhatsAppButton').then((mod) => mod.WhatsAppButton),
  { ssr: false }
);

export const WhatsAppLoader = () => {
  return <WhatsAppButtonWithNoSSR />;
};
