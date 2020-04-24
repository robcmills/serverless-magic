import React from 'react';
import { createUseStyles } from 'react-jss';

import { DEFAULT_TEXT_COLOR, DARK_GRAY } from 'hexproof/styles/colors';
import { BORDER, SPACING_UNIT } from 'hexproof/styles/constants';
import { BASE_FONT_SIZE, p } from 'hexproof/components/typography/styles';

const useStyles = createUseStyles({
  searchContainer: {
    display: 'grid',
    maxWidth: 512,
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
    padding: [0, SPACING_UNIT],
    '&:focus': {
      borderColor: DEFAULT_TEXT_COLOR,
      outline: 'none',
    },
  },
});

export function SetsSearch() {
  const s = useStyles();

  return (
    <div className={s.searchContainer}>
      <input
        className={s.searchInput}
        placeholder='Search'
      />
    </div>
  );
}
