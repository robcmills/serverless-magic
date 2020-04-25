import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { p } from './styles';

const useStyles = createUseStyles({
  p,
});

interface Props {
  children?: ReactNode;
  className?: string;
}

export function P({
  children,
  className,
}: Props) {
	const s = useStyles();
	return (
	  <p className={cn(s.p, className)}>
	    {children}
	  </p>
	);
}
