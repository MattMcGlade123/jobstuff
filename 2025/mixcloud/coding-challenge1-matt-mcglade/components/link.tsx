import * as React from 'react';


interface LinkProps {
    url: string,
    children: React.ReactNode,
};

export default function Link({ url, children }: LinkProps) {
    const finalLink = url.includes('https://') ? url : `https://${url}`
    return <a href={finalLink}>{children}</a>;
}
