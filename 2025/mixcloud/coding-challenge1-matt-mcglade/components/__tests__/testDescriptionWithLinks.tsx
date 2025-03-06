import React from 'react';
import { render, screen } from '@testing-library/react';
import DescriptionWithLinks from '../descriptionWithLinks';

describe('<DescriptionWithLinks />', () => {
    it('should display the description without links', () => {
        render(
            <DescriptionWithLinks
                description="My test description"
                links={[
                    { url: 'www.mixcloud.com', text: 'Mixcloud!' },
                    {
                        url: 'https://www.mixcloud.com/spartacus/',
                        text: 'Spartacus'
                    }
                ]}
            />
        );
        expect(screen.getByText('My test description')).toBeTruthy();
    });

    it('should display the links in the text', () => {
        render(
            <DescriptionWithLinks
                description="My test description is www.mixcloud.com and https://www.mixcloud.com/spartacus/"
                links={[
                    { url: 'www.mixcloud.com', text: 'Mixcloud!' },
                    {
                        url: 'https://www.mixcloud.com/spartacus/',
                        text: 'Spartacus'
                    }
                ]}
            />
        );
        expect(screen.getByText('Mixcloud!')).toBeTruthy();
        expect(screen.getByText('Spartacus')).toBeTruthy();
    });

    it('should display the list of links all with https', () => {
        render(
            <DescriptionWithLinks
                description="My test description is www.mixcloud.com and https://www.mixcloud.com/spartacus/"
                links={[
                    { url: 'www.mixcloud.com', text: 'Mixcloud!' },
                    {
                        url: 'https://www.mixcloud.com/spartacus/',
                        text: 'Spartacus'
                    }
                ]}
            />
        );
        expect(screen.getByText('Mixcloud!')).toHaveAttribute('href', 'https://www.mixcloud.com');
        expect(screen.getByText('Spartacus')).toHaveAttribute('href', 'https://www.mixcloud.com/spartacus/');
    });
});
