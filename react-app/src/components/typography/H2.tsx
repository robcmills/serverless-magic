import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { h2 } from './styles';

const useStyles = createUseStyles({
  h2,
});

interface P {
  children?: ReactNode;
  className?: string;
}

export function H2({
  children,
  className,
}: P) {
	const s = useStyles();
	return (
	  <h2 className={cn(s.h2, className)}>
	    {children}
	  </h2>
	);
}
