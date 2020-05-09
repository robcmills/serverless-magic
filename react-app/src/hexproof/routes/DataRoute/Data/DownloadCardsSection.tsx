import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject';

import { downloadBulkDataObjectsAsyncAction } from 'hexproof/redux/bulkDataObjects/actions';

import {
  bulkDataObjectsSelector,
  isDownloadingBulkDataSelector,
} from 'hexproof/redux/bulkDataObjects/selectors';

import { Button } from 'hexproof/components/Button';
import { H2 } from 'hexproof/components/typography/H2';
import { P } from 'hexproof/components/typography/P';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  description: {
    margin: [SPACING_UNIT / 2, 0],
  },
});

export function DownloadCardsSection() {
  const s = useStyles();
  const bulkDataObjects: IScryFallBulkDataObject[] = useSelector(bulkDataObjectsSelector);
  const isDownloaded = !!bulkDataObjects.length;
  const isDownloadingBulkData = useSelector(isDownloadingBulkDataSelector);

  useEffect(() => {
    if (isDownloaded || isDownloadingBulkData) {
      return;
    }
    downloadBulkDataObjectsAsyncAction();
  }, [isDownloaded, isDownloadingBulkData]);

  const bulkDataButtons = bulkDataObjects.map((bulkObject: IScryFallBulkDataObject) => {
    const megabyteSize = (bulkObject.compressed_size / 1000000).toFixed(2) + 'MB';
    return (
      <div key={bulkObject.id}>
        <Button>
          {`Download ${bulkObject.name} ~ ${megabyteSize}`}
        </Button>
        <P className={s.description}>{bulkObject.description}</P>
      </div>
    );
  });

  const bulkDataSection = (
    <>
      <H2>Download Cards</H2>
      {bulkDataButtons}
    </>
  );

  return (
    <>
      {isDownloaded && bulkDataSection}
    </>
  );
}
