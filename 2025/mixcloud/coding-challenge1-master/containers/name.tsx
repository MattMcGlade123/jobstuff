// @flow
import React, { useEffect, useState } from 'react';
import Name from '../components/name';
import { NameProps } from '../custom-types';

export default function Namecontainer({ loading, error, data }: NameProps) {
    const [finalData, setFinalData] = useState<NameProps>({ loading, error, data });

    useEffect(() => {
        setTimeout(() => {
            setFinalData({ loading: false, data: { name: 'John Smith' } });
        }, 2000);
    }, []);

    return (
        <Name {...{ loading: finalData.loading, error: finalData.error, data: finalData.data }} />
    );
};
