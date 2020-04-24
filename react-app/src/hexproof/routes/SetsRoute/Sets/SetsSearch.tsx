import React, { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';

// actions
import { setSearchQuery } from 'hexproof/redux/sets/actions';

// components
import { SearchIcon } from 'hexproof/components/icons/SearchIcon';

// jss
import { DEFAULT_TEXT_COLOR, DARK_GRAY, GRAY } from 'hexproof/styles/colors';
import { BORDER, SPACING_UNIT } from 'hexproof/styles/constants';
import { BASE_FONT_SIZE, p } from 'hexproof/components/typography/styles';

const useStyles = createUseStyles({
  searchContainer: {
    display: 'grid',
    maxWidth: 512,
    position: 'relative',
  },
  searchInput: {
    ...p,
    alignContent: 'center',
    backgroundColor: DARK_GRAY,
    border: BORDER,
    borderRadius: SPACING_UNIT,
    caretColor: DEFAULT_TEXT_COLOR,
    color: DEFAULT_TEXT_COLOR,
    fontSize: BASE_FONT_SIZE,
    height: SPACING_UNIT * 2,
    padding: [0, 42, 0, SPACING_UNIT],
    '&:focus': {
      borderColor: DEFAULT_TEXT_COLOR,
      outline: 'none',
    },
  },
  icon: {
    color: GRAY,
    display: 'grid',
    height: '100%',
    placeItems: 'center',
    position: 'absolute',
    right: 8,
    width: SPACING_UNIT * 2,
    '& svg': {
      height: SPACING_UNIT,
      width: SPACING_UNIT,
    },
  },
});

export function SetsSearch() {
  const s = useStyles();

  const [query, setQuery] = useState('');

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setQuery(value);
    setSearchQuery(value);
  }, []);

  return (
    <div className={s.searchContainer}>
      <input
        className={s.searchInput}
        onChange={handleChange}
        placeholder='Search'
        value={query}
      />
      <div className={s.icon}>
        <SearchIcon  />
      </div>
    </div>
  );
}
