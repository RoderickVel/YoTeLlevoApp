import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient } from '@angular/common/http';
import { getLatitude,getLongitude } from 'geolib';
import { RespuestaUbicacion } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private Http:HttpClient) { }

  getLocation(){
    const apiKey= '65cc3118505fa5919da3198a7ff2c8fd'
    const long= getLongitude({ lat: -33.5114206, lng: -70.7524411 })
    const lat= getLatitude({ lat: -33.5114206, lng: -70.7524411 })
    return this.Http.get<RespuestaUbicacion>(`http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${lat},${long}`)
  }

}


