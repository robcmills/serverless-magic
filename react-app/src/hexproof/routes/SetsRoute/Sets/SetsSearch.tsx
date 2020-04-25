import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

// actions
import { setSearchQuery } from 'hexproof/redux/sets/actions';

// selectors
import { setsSearchResultsCountSelector } from 'hexproof/redux/sets/selectors';

// components
import { P } from 'hexproof/components/typography/P';
import { SearchIcon } from 'hexproof/components/icons/SearchIcon';

// jss
import { DEFAULT_TEXT_COLOR, DARK_GRAY, GRAY } from 'hexproof/styles/colors';
import { BORDER, SPACING_UNIT } from 'hexproof/styles/constants';
import { BASE_FONT_SIZE, p } from 'hexproof/components/typography/styles';

const useStyles = createUseStyles({
  search: {
    alignItems: 'center',
    display: 'flex',
  },
  inputContainer: {
    display: 'grid',
    flex: 1,
    maxWidth: 375,
    position: 'relative',
  },
  input: {
    ...p,
    alignContent: 'center',
    backgroundColor: DARK_GRAY,
    border: BORDER,
    borderRadius: SPACING_UNIT,
    boxSizing: 'border-box',
    caretColor: DEFAULT_TEXT_COLOR,
    color: DEFAULT_TEXT_COLOR,
    fontSize: BASE_FONT_SIZE,
    height: SPACING_UNIT * 2,
    padding: [0, 42, 0, SPACING_UNIT],
    width: '100%',
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
  results: {
    marginLeft: SPACING_UNIT,
    minWidth: 100,
    whiteSpace: 'nowrap',
  },
});

export function SetsSearch() {
  const s = useStyles();

  const resultsCount = useSelector(setsSearchResultsCountSelector);

  const [query, setQuery] = useState('');

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setQuery(value);
    setSearchQuery(value);
  }, []);

  return (
    <div className={s.search}>
      <div className={s.inputContainer}>
        <input
          className={s.input}
          onChange={handleChange}
          placeholder='Search'
          value={query}
        />
        <div className={s.icon}>
          <SearchIcon  />
        </div>
      </div>
      <div className={s.results}>
        <P>{resultsCount} Results</P>
      </div>
    </div>
  );
}
