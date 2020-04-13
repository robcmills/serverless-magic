import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { data } from 'hexproof/data';

import { Button } from 'hexproof/components/Button';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    alignContent: 'start',
    display: 'grid',
    gridGap: SPACING_UNIT,
    padding: SPACING_UNIT,
  },
  number: {
    fontFamily: 'monospace',
  },
});

export function DataBody() {
  const s = useStyles();

  // Local sets count
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

  // Download sets
  const downloadSets = async () => {
    const sets = await data.downloadSets();
    console.log('sets', sets);
  }

  return (
    <div className={s.body}>
      <div>
        Number of downloaded Sets: {renderedLocalSetsCount}
      </div>
      <div>
        <Button onClick={downloadSets}>Download Sets</Button>
      </div>
    </div>
  );
}
