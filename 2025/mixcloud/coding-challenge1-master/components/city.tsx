import React from 'react';
import Content from './content';
import { CityProps } from '../custom-types';

export default function City({ loading, error, data }: CityProps) {
    return (<Content loading={loading} error={error} data={data?.city} />);
}
