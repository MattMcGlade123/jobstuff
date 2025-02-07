'use client';

import React, { useCallback, useEffect, useState } from 'react';

import SearchBoxStructure from './SearchBoxStructure';
import useSearchData from '@/utils/customHooks/useSearchData';

const SearchBoxLogic = () => {
  const [currentSearchValue, setCurrentSearchValue] = useState<string>('');
  const { searchData } = useSearchData();

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchValue(event.target.value);
  }, []);

  useEffect(() => {
    if (currentSearchValue) {
      searchData(currentSearchValue);
    }
  }, [currentSearchValue])

  const componentProps = {
    handleChange,
    currentSearchValue
  };

  return <SearchBoxStructure {...componentProps} />;
};

export default SearchBoxLogic;
