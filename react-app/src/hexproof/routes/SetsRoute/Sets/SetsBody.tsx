import React, { forwardRef, useCallback, useMemo, Ref } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';

import { ISet } from 'hexproof/types/ISet';
import { SortDirection } from 'hexproof/types/SortDirection';

import {
  setSortDirection,
  setSortField,
} from 'hexproof/redux/sets/actions';
import {
  setsColumnFieldsSelector,
  setsColumnWidthsSelector,
  setsSortDirectionSelector,
  setsSortFieldSelector,
  setsSortedArraySelector,
} from 'hexproof/redux/sets/selectors';

// import { MagicIcon } from 'hexproof/components/icons/MagicIcon';
import { CaretIcon } from 'hexproof/components/icons/CaretIcon';

import { DARK_GRAY, GRAY, LIGHT_GRAY, ORANGE } from 'hexproof/styles/colors';
import { BORDER, SPACING_UNIT } from 'hexproof/styles/constants';
import { ellipsify } from 'hexproof/styles/mixins';

const rowHeight = (rowIndex: number) => SPACING_UNIT * 2;

const useStyles = createUseStyles({
  body: {
    display: 'grid',
    padding: SPACING_UNIT,
  },
  table: {
    border: BORDER,
    display: 'grid',
  },
  head: {
    backgroundColor: GRAY,
    borderBottom: BORDER,
    display: 'grid',
    fontWeight: 'bold',
    gridAutoFlow: 'column',
    gridGap: 1,
    gridTemplateColumns: ({ columnWidths }: { columnWidths: number[] }) => columnWidths
      .map(width => `${width - GUTTER_SIZE}px`)
      .join(' '),
    position: 'sticky !important',
    zIndex: 2,
    top: 0,
    left: 0,
    width: '100%',
    height: rowHeight(0),
  },
  headCell: {
    backgroundColor: LIGHT_GRAY,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  fieldLabel: {
    ...ellipsify,
    alignItems: 'center',
    display: 'grid',
    padding: [0, 6],
    paddingBottom: 3,
  },
  caret: {
    boxSizing: 'border-box',
    display: 'grid',
    padding: 6,
    placeItems: 'center',
    transform: 'rotate(0deg)',
    transition: 'transform 100ms',
    '&:hover, &:focus': {
      color: ORANGE,
    },
    '& svg': {
      height: 14,
      width: 14,
    },
  },
  caretAsc: {
    transform: 'rotate(180deg)',
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
  row: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: SPACING_UNIT,
  },
});

const fieldLabels = [
  'Released',
  'Name',
  'Card count',
];

const GUTTER_SIZE = 1;


export function SetsBody() {
  const columnFields = useSelector(setsColumnFieldsSelector);
  const columnWidths = useSelector(setsColumnWidthsSelector);
  const sumColumnWidths = columnWidths.reduce((acc, cur) => acc + cur, 0);
  const sets: ISet[] = useSelector(setsSortedArraySelector);
  const sortField = useSelector(setsSortFieldSelector);
  const sortDirection = useSelector(setsSortDirectionSelector);

  const s = useStyles({ columnWidths });

  const getHandleClickHeadCell = useCallback((field: keyof ISet) => () => {
    let newSortDirection: SortDirection = 'DESC';
    if (sortField === field) {
      newSortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC';
    }
    setSortDirection(newSortDirection);
    setSortField(field);
  }, [sortField, sortDirection]);

  const columnHeads = useMemo(() => {
    return columnFields.map((field, index) => {
      const caretClassName = sortDirection === 'ASC' ? s.caretAsc : undefined;
      const caretButton = (
        <div className={s.caret}>
          <CaretIcon className={caretClassName} />
        </div>
      );
      const maybeCaret = field === sortField ? caretButton : null;
      return (
        <div className={s.headCell} key={field} onClick={getHandleClickHeadCell(field)}>
          <div className={s.fieldLabel}>
            {fieldLabels[index]}
          </div>
          {maybeCaret}
        </div>
      );
    });
  }, [columnFields, getHandleClickHeadCell, s, sortDirection, sortField]);

  const innerElementType = forwardRef(({ children, ...rest }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} {...rest}>
      <div className={s.head}>
        {columnHeads}
      </div>
      {children}
    </div>
  ));

  const Cell = useCallback(({ columnIndex, rowIndex, style }) => {
    if (rowIndex === 0) {
      return null;
    }
    const set: ISet = sets[rowIndex - 1];
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
            height={height - 2}
            innerElementType={innerElementType}
            rowCount={sets.length + 1}
            rowHeight={rowHeight}
            width={Math.min(width - 2, sumColumnWidths)}
          >
            {Cell}
          </Grid>
        )}
      </AutoSizer>
    </div>
  );
}
