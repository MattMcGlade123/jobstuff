// @flow
import React from 'react';
import Content from './content';


type Props = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default function Name({ loading, error, data }: Props) {
    return (<Content loading={loading} error={error} data={data?.name} />)
}
