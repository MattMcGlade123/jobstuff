// @flow
import React from 'react';

type Props = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default function Content({ loading, error, data }: Props) {
    if (loading) {
        return <div>Loading..</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }
    if (data) {
        return <h2>{data}</h2>;
    }
    return null;
}
