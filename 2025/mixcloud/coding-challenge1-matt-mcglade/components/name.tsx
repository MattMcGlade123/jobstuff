// @flow
import React from 'react';
import Content from './content';
import { NameProps } from '../custom-types';


export default function Name({ loading, error, data }: NameProps) {
    return (<Content loading={loading} error={error} data={data?.name} />);
}
