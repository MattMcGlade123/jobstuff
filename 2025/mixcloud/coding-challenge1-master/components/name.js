// @flow
import React from 'react';

export default function Name({ loading, error, data }) {
    if (loading) {
        return <div>Loading..</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }
    if (data) {
        return <h2>{data.name}</h2>;
    }
    return null;
}
