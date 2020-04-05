import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { h3 } from './styles';

const useStyles = createUseStyles({
  h3,
});

interface P {
  children?: ReactNode;
  className?: string;
}

export function H3({
  children,
  className,
}: P) {
	const s = useStyles();
	return (
	  <h3 className={cn(s.h3, className)}>
	    {children}
	  </h3>
	);
}
