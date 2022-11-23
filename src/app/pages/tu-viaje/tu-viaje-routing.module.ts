import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuViajePage } from './tu-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: TuViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuViajePageRoutingModule {}
