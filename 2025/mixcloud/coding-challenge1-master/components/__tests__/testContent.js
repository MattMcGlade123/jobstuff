// @flow
import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from '../content';

describe('<Content />', () => {
    it('should display the the loading if loading is true', () => {
        render(
            <Content
                loading={true}
                error={null}
                data={'This is data'}
            />
        );
        expect(screen.getByText('Loading..')).toBeTruthy();
    });

    it('should display the the error if loading is true', () => {
        render(
            <Content
                loading={false}
                error={{ cause: true }}
                data={'This is data'}
            />
        );
        expect(screen.getByText('Error!')).toBeTruthy();
    });

    it('should display the the data if data is passed', () => {
        render(
            <Content
                loading={false}
                error={null}
                data={'This is data'}
            />
        );
        expect(screen.getByText('This is data')).toBeTruthy();
    });
});
