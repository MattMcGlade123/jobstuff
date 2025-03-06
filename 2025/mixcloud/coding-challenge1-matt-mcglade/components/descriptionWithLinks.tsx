import React from 'react';
import Link from './link';
import { DescriptionWithLinksProps } from '../custom-types';

const DescriptionWithLinks: React.FC<DescriptionWithLinksProps> = ({ description, links }) => {
    const words = description.split(/(\s+)/);

    const processedWords = words.map((word, index) => {
        const cleanWord = word.replace(/[.,!?]+$/, ''); // Trim punctuation for matching
        const link = links.find(({ url }) => url === cleanWord);

        return link ? (
            <Link key={index} url={link.url} >
                {link.text}
            </Link>
        ) : (
            word
        );
    });

    return <div>{processedWords}</div>;
};

export default DescriptionWithLinks;