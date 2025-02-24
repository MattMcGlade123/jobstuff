import type { Metadata } from 'next'
import PageStructure from './PageStructure';

export const metadata: Metadata = {
  title: 'Recipes Search App',
  description: 'An app that helps you search for Recipes',
}

export default async function Home() {
  return (
    <PageStructure />
  );
}
