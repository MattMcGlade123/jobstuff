import * as React from 'react';
import Link from './link';
import { DescriptionWithLinksProps } from '../custom-types';


export default function DescriptionWithLinks({ description, links }: DescriptionWithLinksProps) {
    return (
        <>
            <div>{description}</div>
            {links && links.map((thisLink) => (
                <div key={thisLink.text}>go to  <Link url={thisLink.url}>{thisLink.text}</Link></div>
            ))}
        </>
    );
}