// @flow
import React from 'react';
import { render, screen } from '@testing-library/react';
import DescriptionWithLinks from '../descriptionWithLinks';

describe('<DescriptionWithLinks />', () => {
    it('should display the description', () => {
        render(
            <DescriptionWithLinks
                description="My test description"
                links={[]}
            />
        );
        expect(screen.getByText('My test description')).toBeTruthy();
    });
});
