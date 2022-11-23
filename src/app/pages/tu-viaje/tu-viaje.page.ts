import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { UbicacionService } from '../../services/ubicacion.service';
import { Data } from '../../interfaces/interfaces';
import { getLatitude, getLongitude } from 'geolib';


declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-tu-viaje',
  templateUrl: './tu-viaje.page.html',
  styleUrls: ['./tu-viaje.page.scss'],
})


export class TuViajePage implements OnInit {

  ubicacion: Data[] = [];

  map = null;

  constructor(private menuController: MenuController,
              private ubicacionService: UbicacionService,
              private navController: NavController) {}

  ngOnInit() {

    this.ubicacionService.getLocation().subscribe(resp=>{
      console.log('Ubicacion', resp);
      this.ubicacion.push(...resp.data);
    this.loadMap();
    });
  
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

  async logout(){
    console.log('loggedout');
    localStorage.removeItem('ingresado')
    this.navController.navigateRoot('login');
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.5114206, lng: -70.7524411};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      //this.renderMarkers();
      mapEle.classList.add('show-map');
      const marker={
        position:{
          lat: getLatitude(myLatLng),
          lng: getLongitude(myLatLng),
        },
        title: 'marcador'
      }
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}

