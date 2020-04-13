import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { ISet } from 'hexproof/types/ISet';
import { setsArraySelector } from 'hexproof/redux/sets/selectors';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    alignContent: 'start',
    display: 'grid',
    gridGap: SPACING_UNIT,
    padding: SPACING_UNIT,
  },
});

export function SetsBody() {
  const s = useStyles();
  const sets: ISet[] = useSelector(setsArraySelector);

  const renderedSets = sets.map((set: ISet) => {
    return (
      <div key={set.id}>{set.name}</div>
    );
  });

  return (
    <div className={s.body}>
      {renderedSets}
    </div>
  );
}
