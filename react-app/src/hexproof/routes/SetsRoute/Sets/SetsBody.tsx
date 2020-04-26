import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { downloadSetsAsyncAction } from 'hexproof/redux/sets/actions';

import {
  isDownloadingSetsSelector,
  setsCountSelector,
} from 'hexproof/redux/sets/selectors';

import { SvgSpinner } from 'hexproof/components/SvgSpinner';
import { SetsGrid } from './SetsGrid';
import { SetsSearch } from './SetsSearch';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    display: 'grid',
    gridGap: SPACING_UNIT,
    gridTemplateRows: 'auto 1fr',
    padding: SPACING_UNIT,
  },
  spinner: {
    margin: SPACING_UNIT,
  },
});

export function SetsBody() {
  const s = useStyles();

  const isDownloadingSets = useSelector(isDownloadingSetsSelector);
  const setsCount = useSelector(setsCountSelector);
  const areSetsNotDownloaded = setsCount === 0;

  useEffect(() => {
    if (areSetsNotDownloaded && !isDownloadingSets) {
      downloadSetsAsyncAction();
    }
  }, [areSetsNotDownloaded, isDownloadingSets]);

  if (isDownloadingSets) {
    return <SvgSpinner className={s.spinner} />;
  }

  return (
    <div className={s.body}>
      <SetsSearch />
      <div>
        <SetsGrid />
      </div>
    </div>
  );
}
