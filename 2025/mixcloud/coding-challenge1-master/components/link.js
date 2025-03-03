// @flow
import * as React from 'react';

export default function Link({ url, children }) {
    const finalLink = url.includes('https://') ? url : `https://${url}`
    return <a href={finalLink}>{children}</a>;
}
