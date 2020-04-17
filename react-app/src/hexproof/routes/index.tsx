import React, { ReactNode } from 'react';

import { DataRoute } from 'hexproof/routes/DataRoute';
import { RootRoute } from 'hexproof/routes/RootRoute';
import { SetsRoute } from 'hexproof/routes/SetsRoute';

interface Routes {
  [hash: string]: ReactNode;
}

export const routes: Routes = {
  '/': <RootRoute />,
  '#data': <DataRoute />,
  '#sets': <SetsRoute />,
};
