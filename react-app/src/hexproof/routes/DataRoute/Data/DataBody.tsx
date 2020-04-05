import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { data } from 'hexproof/data';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    padding: SPACING_UNIT,
  },
  number: {
    fontFamily: 'monospace',
  },
});

export function DataBody() {
  const s = useStyles();

  const [localSetsCount, setLocalSetsCount] = useState(0);
  const [isFetchingLocalSetsCount, setIsFetchingLocalSetsCount] = useState(true);

  useEffect(() => {
    let isMounted = true;
    data.getLocalSetsCount().then((value: number) => {
      if (isMounted) {
        setLocalSetsCount(value);
        setIsFetchingLocalSetsCount(false);
      }
    }).catch(error => {
      console.error('Failed to fetch localSetsCount', error);
    });
    return () => {
      isMounted = false;
    };
  });

  const renderedLocalSetsCount = (
    !isFetchingLocalSetsCount && localSetsCount
  );

  return (
    <div className={s.body}>
      Number of downloaded Sets: {renderedLocalSetsCount}
    </div>
  );
}
