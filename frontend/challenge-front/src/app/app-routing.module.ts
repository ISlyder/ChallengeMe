import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FLAGS_ROUTES } from './routes/flags.routes';
import { NOT_FOUND_ROUTES } from './routes/notfound.routes';

const routes: Routes = [
  ...FLAGS_ROUTES,
  {
    path: '',
    redirectTo: 'flags',
    pathMatch: 'full',
  },
  ...NOT_FOUND_ROUTES,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
