import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-yo-te-llevo',
  templateUrl: './yo-te-llevo.page.html',
  styleUrls: ['./yo-te-llevo.page.scss'],
})
export class YoTeLlevoPage implements OnInit {

  componentes : Componente[] = [
    {
      icon:'happy',
      name:'Llevar',
      redirecTo:'/llevar'
    },
    {
      icon:'car-sport',
      name:'Viajar',
      redirecTo:'/viajar'
    },
    {
      icon:'map',
      name:'Tu Viaje',
      redirecTo:'/tu-viaje'
    },
    {
      icon:'time',
      name:'Historial',
      redirecTo:'/historial'
    },
    {
      icon:'exit',
      name:'Logout',
      redirecTo:''
    },
  ]

  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

}
