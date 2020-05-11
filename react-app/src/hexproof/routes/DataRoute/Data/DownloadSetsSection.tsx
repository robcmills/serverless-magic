import React from 'react';
import { useSelector } from 'react-redux';

import { downloadSetsAsyncAction } from 'hexproof/redux/sets/actions';
import { downloadSetIconsAsyncAction } from 'hexproof/redux/setIcons/actions';

import {
  isDownloadingSetsSelector,
  setsCountSelector,
} from 'hexproof/redux/sets/selectors';
import {
  isDownloadingSetIconsSelector,
  setIconsCountSelector,
} from 'hexproof/redux/setIcons/selectors';

import { Button } from 'hexproof/components/Button';
import { DownloadIcon } from 'hexproof/components/icons/DownloadIcon';
import { H2 } from 'hexproof/components/typography/H2';

export function DownloadSetsSection() {
  const isDownloadingSets = useSelector(isDownloadingSetsSelector);
  const isDownloadingSetIcons = useSelector(isDownloadingSetIconsSelector);
  const setsCount = useSelector(setsCountSelector);
  const setIconsCount = useSelector(setIconsCountSelector);

  const setsSection = (
    <>
      <div>
        Number of downloaded Sets: {!isDownloadingSets && setsCount}
      </div>
      <div>
        <Button
          isDisabled={isDownloadingSets}
          onClick={downloadSetsAsyncAction}
        >
          {isDownloadingSets ? 'Downloading Sets...' : 'Download Sets'}
        </Button>
      </div>
    </>
  );

  const setIconsSection = (
    <>
      <div>
        Number of downloaded Set Icons: {setIconsCount}
      </div>
      <div>
        <Button
          isDisabled={isDownloadingSetIcons}
          onClick={downloadSetIconsAsyncAction}
        >
          {isDownloadingSetIcons ? 'Downloading Set Icons...' : 'Download Set Icons'}
        </Button>
      </div>
    </>
  );

  return (
    <>
      <H2>Download Sets <DownloadIcon /></H2>
      {setsSection}
      {setsCount > 0 && setIconsSection}
    </>
  );
}
