import React, { FC } from 'react';
import { ContentProps } from '../custom-types';

export default function Content({ loading, error, data }: ContentProps) {
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
