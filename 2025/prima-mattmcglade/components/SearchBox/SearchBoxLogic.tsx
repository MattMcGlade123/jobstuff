'use client';

import React, { useCallback, useEffect, useState } from 'react';

import SearchBoxStructure from './SearchBoxStructure';
import { useDispatch } from 'react-redux';

const SearchBoxLogic = () => {
  const [currentSearchValue, setCurrentSearchValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchValue(event.target.value);
  }, []);

  useEffect(() => {
    if (currentSearchValue && currentSearchValue?.length > 2) {
      // dispatch(currentSearchValue)
    }
  }, [currentSearchValue])

  const componentProps = {
    handleChange,
    currentSearchValue
  };

  return <SearchBoxStructure {...componentProps} />;
};

export default SearchBoxLogic;
