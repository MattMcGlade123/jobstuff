'use client';

import React, { useCallback, useEffect, useState } from 'react';

import SearchBoxStructure from './SearchBoxStructure';
import useSearchData from '@/utils/customHooks/useSearchData';
import { useDispatch } from 'react-redux';
import { updateList } from '@/features/siteData';

const SearchBoxLogic = () => {
  const dispatch = useDispatch();
  const [currentSearchValue, setCurrentSearchValue] = useState<string>('');
  const { searchData } = useSearchData();

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchValue(event.target.value);
  }, []);

  useEffect(() => {
    if (currentSearchValue) {
      searchData(currentSearchValue);
    }
    else if (currentSearchValue === '') {
      dispatch(updateList(null));
    }
  }, [currentSearchValue, searchData, dispatch])

  const componentProps = {
    handleChange,
    currentSearchValue
  };

  return <SearchBoxStructure {...componentProps} />;
};

export default SearchBoxLogic;
