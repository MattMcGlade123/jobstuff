import React, { ChangeEvent, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass

} from '@fortawesome/free-solid-svg-icons'

import {
  StyledAddressList,
  StyledCandCPrice,
  StyledDetails,
  StyledEditButton,
  StyledTitle,
} from './SearchBoxStyles';

interface DeliveryInformationInterface {
  currentSearchValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBoxStructure: FC<DeliveryInformationInterface> = ({
  currentSearchValue,
  handleChange
}) => {
  return (
    <div>
      <input
        data-testid="searchBox"
        type="text"
        value={currentSearchValue}
        onChange={handleChange}
        placeholder="Type something..."
        className="border p-2 rounded"
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBoxStructure;
