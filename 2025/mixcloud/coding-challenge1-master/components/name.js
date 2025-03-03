// @flow
import React from 'react';
import Content from './content';

export default function Name({ loading, error, data }) {
    return (<Content loading={loading} error={error} data={data?.name} />)
}
