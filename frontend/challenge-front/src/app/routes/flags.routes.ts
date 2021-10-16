import { Route } from '@angular/router';
import { FlagPageComponent } from '../flag-game/flag-page.component';
import { FlagPageResolver } from '../flag-game/flag-page.resolver';

export const FLAGS_ROUTES: Route[] = [
  {
    path: 'flags',
    component: FlagPageComponent,
    resolve: {
      countries: FlagPageResolver,
    },
  },
];
