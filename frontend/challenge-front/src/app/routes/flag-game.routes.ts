import {Route} from '@angular/router';
import {FlagGameComponent} from '../flag-game/flag-game.component';
import {FlagPageResolver} from '../flag-page/flag-page.resolver';

export const FLAGS_GAME_ROUTES: Route[] = [
  {
    path: 'flag-challenge',
    component: FlagGameComponent,
    resolve: {
      countries: FlagPageResolver,
    },
  },
];
