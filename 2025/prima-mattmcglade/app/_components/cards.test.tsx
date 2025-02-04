import React from 'react';
import { cleanup, render } from '@testing-library/react'

import Cards from './cards';

describe('Cards', () => {
  afterEach(cleanup);

  test('it should match the snapshot and render', () => {
    const { container } = render(<Cards />);
    expect(container).toBeInTheDocument();
  });
});
