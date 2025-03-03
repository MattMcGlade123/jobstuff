// @flow
import React, { useEffect, useState } from 'react';
import Name from '../components/name';

type State = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default function CityContainer({ loading, error, data }: State) {
    const [finalData, setFinalData] = useState({ loading, error, data });

    useEffect(() => {
        setTimeout(() => {
            setFinalData({ loading: false, data: { name: 'John Smith' } });
        }, 2000);
    });

    return (
        <Name {...{ loading: finalData.loading, error: finalData.error, data: finalData.data }} />
    );
};
