// @flow
import * as React from 'react';
import Content from './content';

export default function City({ loading, error, data }) {
    return (<Content loading={loading} error={error} data={data?.city} />)
}
