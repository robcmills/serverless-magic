import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { ISet } from 'hexproof/types/ISet';
import { setsArraySelector } from 'hexproof/redux/sets/selectors';

// import { MagicIcon } from 'hexproof/components/icons/MagicIcon';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    alignContent: 'start',
    display: 'grid',
    gridGap: SPACING_UNIT,
    padding: SPACING_UNIT,
  },
  head: {
    display: 'grid',
    fontWeight: 'bold',
    gridAutoFlow: 'column',
    gridGap: SPACING_UNIT,
    gridTemplateColumns: 'min-content',
  },
  icon: {
  },
  name: {
  },
  row: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: SPACING_UNIT,
  },
});

export function SetsBody() {
  const s = useStyles();
  const sets: ISet[] = useSelector(setsArraySelector);

  const rows = sets.map((set: ISet) => {
    return (
      <div className={s.row} key={set.id}>
        <div className={s.name}>
          {set.name}
        </div>
      </div>
    );
  });

  return (
    <div className={s.body}>
      <div className={s.head}>
        {/*<div className={s.icon}> <MagicIcon /> </div>*/}
        <div className={s.name}>
          Name
        </div>
      </div>
      {rows}
    </div>
  );
}
