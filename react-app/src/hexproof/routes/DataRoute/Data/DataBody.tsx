import React from 'react';
import { createUseStyles } from 'react-jss';

import { DownloadCardsSection } from './DownloadCardsSection';
import { DownloadSetsSection } from './DownloadSetsSection';

import { MEDIUM_BODY_WIDTH, SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    alignContent: 'start',
    display: 'grid',
    gridGap: SPACING_UNIT,
    maxWidth: MEDIUM_BODY_WIDTH,
    padding: SPACING_UNIT,
  },
});

export function DataBody() {
  const s = useStyles();

  return (
    <div className={s.body}>
      <DownloadSetsSection />
      <DownloadCardsSection />
    </div>
  );
}
