import {Route} from '@angular/router';
import {FlagGameComponent} from '../flag-game/flag-game.component';

export const FLAGS_GAME_ROUTES: Route[] = [
  {
    path: 'flag-challenge',
    component: FlagGameComponent,
  },
];
