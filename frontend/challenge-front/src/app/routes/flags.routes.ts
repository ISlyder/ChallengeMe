import { Route } from '@angular/router';
import { FlagGameComponent } from '../flag-game/flag-game.component';
import { FlagGameResolver } from '../flag-game/flag-game.resolver';

export const FLAGS_ROUTES: Route[] = [
  {
    path: 'flags',
    component: FlagGameComponent,
    resolve: {
      countries: FlagGameResolver,
    },
  },
];
