// @flow
import React, { useEffect, useState } from 'react';
import City from '../components/city';

type Props = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default function CityContainer({ loading, error, data }: Props) {
    const [finalData, setFinalData] = useState({ loading, error, data });

    useEffect(() => {
        setTimeout(() => {
            setFinalData({ loading: false, data: { city: 'London, UK' } });
        }, 2000);
    },[]);

    return (
        <City {...{ loading: finalData.loading, error: finalData.error, data: finalData.data }} />
    );
};
