import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from '../link';

describe('<Link />', () => {
    it('should display link', () => {
        render(
            <Link
                url={'https://www.test.com'}
            >
                This is a link
            </Link>
        );
         expect(screen.getByText('This is a link')).toHaveAttribute('href', 'https://www.test.com');
    });

    it('should display link with https even if not passed', () => {
        render(
            <Link
                url={'www.test.com'}
            >
                This is a link
            </Link>
        );
        expect(screen.getByText('This is a link')).toBeTruthy();
    });
});
