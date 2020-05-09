import React from 'react';
import { createUseStyles } from 'react-jss';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    alignContent: 'start',
    display: 'grid',
    gridGap: SPACING_UNIT,
    padding: SPACING_UNIT,
  },
});

export function CardsBody() {
  const s = useStyles();

  return (
    <div className={s.body}>
      Cards body
    </div>
  );
}
