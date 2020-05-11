import React, { ReactNode } from 'react';

import { CardsRoute } from 'hexproof/routes/CardsRoute';
import { DataRoute } from 'hexproof/routes/DataRoute';
import { RootRoute } from 'hexproof/routes/RootRoute';
import { SetsRoute } from 'hexproof/routes/SetsRoute';

interface Routes {
  [hash: string]: ReactNode;
}

export const routes: Routes = {
  '/': <RootRoute />,
  '#cards': <CardsRoute />,
  '#data': <DataRoute />,
  '#sets': <SetsRoute />,
};
