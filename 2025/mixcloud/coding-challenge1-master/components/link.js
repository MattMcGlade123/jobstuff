// @flow
import * as React from 'react';


type Props = {
    url: string,
    children: React.ReactNode,
};

export default function Link({ url, children }) {
    const finalLink = url.includes('https://') ? url : `https://${url}`
    return <a href={finalLink}>{children}</a>;
}
