import React from 'react';

import { SvgIcon } from 'hexproof/components/icons/SvgIcon';

interface P {
	className?: string;
}

export function SearchIcon({ className }: P) {
  return (
    <SvgIcon svgClassName={className}>
			<path d='M6,0 C9.3137085,0 12,2.6862915 12,6 C12,7.30658867 11.5823598,8.51563223 10.8732922,9.50091784 L15.9259766,14.5631136 L14.5104137,15.9759766 L9.45234792,10.907882 C8.4760194,11.5959223 7.2851984,12 6,12 C2.6862915,12 0,9.3137085 0,6 C0,2.6862915 2.6862915,0 6,0 Z M6,2 C3.790861,2 2,3.790861 2,6 C2,8.209139 3.790861,10 6,10 C8.209139,10 10,8.209139 10,6 C10,3.790861 8.209139,2 6,2 Z' />
    </SvgIcon>
  );
}