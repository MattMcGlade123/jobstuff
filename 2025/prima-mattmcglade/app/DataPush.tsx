'use client';

import { Recipe } from '@/custom-type';
import { selectSiteData, updateError, updateSiteData } from '@/features/siteData';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';


interface DataPushInterface {
  children: React.ReactNode;
  allData: Recipe[] | null;
  error: string | null;
}


const DataPush: FC<DataPushInterface> = ({
  children,
  allData,
  error
}) => {
  const dispatch = useDispatch();
  const siteData = useSelector(selectSiteData)

  if (allData && siteData === null) {
    console.log('allData', allData)
    dispatch(updateSiteData(allData));
  }

  if (error) {
    dispatch(updateError(error));
  }

  return (
    <>
      {children}
    </>
  );
};

export default DataPush;
