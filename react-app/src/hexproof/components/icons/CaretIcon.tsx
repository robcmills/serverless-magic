import React from 'react';

import { SvgIcon } from 'hexproof/components/icons/SvgIcon';

interface P {
	className?: string;
}

export function CaretIcon({ className }: P) {
  return (
    <SvgIcon svgClassName={className}>
			<polygon points='14.12 3.06 8 9.16666667 1.88 3.06 0 4.94 8 12.94 16 4.94' />
    </SvgIcon>
  );
}