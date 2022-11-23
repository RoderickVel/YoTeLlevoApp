import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuViajePageRoutingModule } from './tu-viaje-routing.module';

import { TuViajePage } from './tu-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuViajePageRoutingModule
  ],
  declarations: [TuViajePage]
})
export class TuViajePageModule {}
