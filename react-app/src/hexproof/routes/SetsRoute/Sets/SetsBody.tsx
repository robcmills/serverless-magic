import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';

import { ISet } from 'hexproof/types/ISet';
import { setsArraySelector } from 'hexproof/redux/sets/selectors';

// import { MagicIcon } from 'hexproof/components/icons/MagicIcon';

import { DARK_GRAY, LIGHT_GRAY } from 'hexproof/styles/colors';
import { BORDER, SPACING_UNIT } from 'hexproof/styles/constants';
import { ellipsify } from 'hexproof/styles/mixins';

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
  grid: {
    backgroundColor: DARK_GRAY,
    border: BORDER,
  },
  cell: {
    alignContent: 'center',
    border: `1px solid ${LIGHT_GRAY}`,
    boxSizing: 'border-box',
    display: 'grid',
    padding: 6,
  },
  cellValue: {
    ...ellipsify,
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

const initialColumnFields: Array<keyof ISet> = [
  'name',
  'released_at',
  'card_count',
];
const initialColumnWidths = [
  256,
  128,
  64,
];

const GUTTER_SIZE = 1;

const rowHeight = (rowIndex: number) => SPACING_UNIT * 2;

export function SetsBody() {
  const s = useStyles();

  const [columnFields] = useState(initialColumnFields);
  const [columnWidths] = useState(initialColumnWidths);
  const sets: ISet[] = useSelector(setsArraySelector);

  const Cell = useCallback(({ columnIndex, rowIndex, style }) => {
    const set: ISet = sets[rowIndex];
    const fieldName: keyof ISet = columnFields[columnIndex];
    const fieldValue = set[fieldName];
    const styleWithGutter = {
      ...style,
      left: style.left - GUTTER_SIZE,
      top: style.top - GUTTER_SIZE,
      width: style.width + GUTTER_SIZE,
      height: style.height + GUTTER_SIZE,
    };
    const title = typeof fieldValue === 'string' ? fieldValue : undefined;
    return (
      <div className={s.cell} style={styleWithGutter} title={title}>
        <div className={s.cellValue}>{fieldValue}</div>
      </div>
    );
  }, [columnFields, sets, s]);

  return (
    <div className={s.body}>
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            className={s.grid}
            columnCount={columnFields.length}
            columnWidth={index => columnWidths[index]}
            height={height}
            rowCount={sets.length}
            rowHeight={rowHeight}
            width={width}
          >
            {Cell}
          </Grid>
        )}
      </AutoSizer>
    </div>
  );
}
