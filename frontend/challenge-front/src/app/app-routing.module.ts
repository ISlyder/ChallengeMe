import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NOT_FOUND_ROUTES } from './routes/notfound.routes';

const routes: Routes = [...NOT_FOUND_ROUTES];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
