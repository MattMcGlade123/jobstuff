import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from '../content';

describe('<Content />', () => {
    it('should display the loading if loading is true', () => {
        render(
            <Content
                loading={true}
                error={undefined}
                data={'This is data'}
            />
        );
        expect(screen.getByText('Loading..')).toBeTruthy();
    });

    it('should display the error if loading is true', () => {
        render(
            <Content
                loading={false}
                error={{name: 'error', message: 'There is an error'}}
                data={'This is data'}
            />
        );
        expect(screen.getByText('Error!')).toBeTruthy();
    });

    it('should display the data if data is passed', () => {
        render(
            <Content
                loading={false}
                error={undefined}
                data={'This is data'}
            />
        );
        expect(screen.getByText('This is data')).toBeTruthy();
    });
});
