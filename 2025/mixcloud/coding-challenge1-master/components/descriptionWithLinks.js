// @flow
import * as React from 'react';
import Link from './link';

type Props = {
    description: string,
    links: Array<{
        text: string,
        url: string
    }>,
};

export default function DescriptionWithLinks({ description, links }: Props) {
    return (
        <>
            <div>{description}</div>
            {links && links.map((thisLink) => (
                <div key={thisLink.text}>go to  <Link url={thisLink.url}>{thisLink.text}</Link></div>
            ))}
        </>
    );
}