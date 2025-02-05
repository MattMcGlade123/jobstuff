'use client';
import type { Metadata } from 'next'
import { Container, Title } from './HomeStyles';

export const metadata: Metadata = {
  title: 'Recipes Search App',
  description: 'An app that helps you search for Recipes',
}

export default function Home() {
  return (
    <Container>
      <Title>
        Welcome to Recipes Search App
      </Title>
    </Container>
  );
}
