import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { downloadSetsAsyncAction } from 'hexproof/redux/sets/actions';
import {
  isDownloadingSetsSelector,
  setsCountSelector,
} from 'hexproof/redux/sets/selectors';

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

  const isDownloadingSets = useSelector(isDownloadingSetsSelector);
  const setsCount = useSelector(setsCountSelector);

  const renderedLocalSetsCount = (
    !isDownloadingSets && setsCount
  );

  return (
    <div className={s.body}>
      <div>
        Number of downloaded Sets: {renderedLocalSetsCount}
      </div>
      <div>
        <Button
          isDisabled={isDownloadingSets}
          onClick={downloadSetsAsyncAction}
        >
          Download Sets
        </Button>
      </div>
    </div>
  );
}
