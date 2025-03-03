// @flow
import * as React from 'react';

export default function City({ loading, error, data }) {
    if (loading) {
        return <div>Loading..</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }
    if (data) {
        return <h3>{data.city}</h3>;
    }
    return null;
}
