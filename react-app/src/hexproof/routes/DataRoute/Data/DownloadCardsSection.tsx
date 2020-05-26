import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

// interfaces
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject';

// actions
import {
  downloadBulkDataObjectWorkerAction,
  downloadBulkDataObjectsAsyncAction,
} from 'hexproof/redux/bulkDataObjects/actions';

// selectors
import {
  bulkDataObjectsSelector,
  isDownloadingBulkDataSelector,
} from 'hexproof/redux/bulkDataObjects/selectors';

// components
import { Button } from 'hexproof/components/Button';
import { DownloadIcon } from 'hexproof/components/icons/DownloadIcon';
import { H2 } from 'hexproof/components/typography/H2';
import { P } from 'hexproof/components/typography/P';
import { Spinner } from 'hexproof/components/Spinner';

// jss
import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  button: {
    textAlign: 'left',
  },
  description: {
    margin: [SPACING_UNIT / 2, 0],
  },
  spinner: {
    margin: SPACING_UNIT,
  },
  disabled: {
    fontSize: '14px',
    fontStyle: 'italic',
    opacity: 0.75,
  },
});

const ENABLED_BULK_OBJECTS: string[] = [
  'oracle_cards',
  // 'rulings',
];

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
    const isDisabled = !ENABLED_BULK_OBJECTS.includes(bulkObject.type);
    const megabyteSize = (bulkObject.compressed_size / 1000000).toFixed(2) + 'MB';

    const handleClick = () => {
      downloadBulkDataObjectWorkerAction(bulkObject);
    };

    return (
      <div key={bulkObject.id}>
        <Button
          className={s.button}
          isDisabled={isDisabled}
          onClick={handleClick}
        >
          {`Download ${bulkObject.name}`} <br/>
          {megabyteSize}
        </Button>
        {isDisabled && <P className={s.disabled}>Not supported yet</P>}
        <P className={s.description}>
          {bulkObject.description}
        </P>
      </div>
    );
  });

  const bulkDataSection = (
    <>
      <H2>Download Bulk Data <DownloadIcon /></H2>
      {bulkDataButtons}
    </>
  );

  if (isDownloadingBulkData) {
    return <Spinner className={s.spinner} />;
  }

  return (
    <>
      {isDownloaded && bulkDataSection}
    </>
  );
}
