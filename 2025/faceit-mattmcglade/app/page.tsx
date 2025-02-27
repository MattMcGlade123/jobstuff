import type { Metadata } from 'next'
import PageStructure from './PageStructure';

export const metadata: Metadata = {
  title: 'All News Central',
  description: 'The only source for news',
}

export default async function Home() {
  return (
    <PageStructure />
  );
}
