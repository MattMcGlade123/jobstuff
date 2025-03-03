// @flow
import * as React from 'react';
import Link from './link';

type State = {
    url: string,
    text: string,
};

export default function DescriptionWithLinks({ description, links }: State) {
    return (
        <>
            <div>{description}</div>
            {links && links.map((thisLink) => (
                <div key={thisLink.text}>go to  <Link url={thisLink.url}>{thisLink.text}</Link></div>
            ))}
        </>
    );
}