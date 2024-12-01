'use client';

import dynamic from 'next/dynamic';

const AppComponent = dynamic(
  () => import('../components/App').then(mod => mod.default),
  { ssr: false }
);

export default function Home() {
  return <AppComponent />;
}