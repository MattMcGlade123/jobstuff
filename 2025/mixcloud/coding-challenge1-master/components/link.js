// @flow
import * as React from 'react';

export default function Link({ url, children }) {
    return <a href={url}>{children}</a>;
}
