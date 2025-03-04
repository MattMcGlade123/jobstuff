// @flow
import React, { useEffect, useState } from 'react';
import City from '../components/city';
import { CityProps } from '../custom-types';

export default function CityContainer({ loading, error, data }: CityProps) {
    const [finalData, setFinalData] = useState<CityProps>({ loading, error, data });

    useEffect(() => {
        setTimeout(() => {
            setFinalData({ loading: false, data: { city: 'London, UK' } });
        }, 2000);
    },[]);

    return (
        <City {...{ loading: finalData.loading, error: finalData.error, data: finalData.data }} />
    );
};
