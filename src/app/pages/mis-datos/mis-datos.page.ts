import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, MenuController, Platform, ToastController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit {

  datos: Usuario[] = [];
  newDato: Usuario = <Usuario>{};
  @ViewChild('myList')myList :IonList;

  constructor(private menuController: MenuController,
              private storageService: RegistroserviceService,
              private plt: Platform,
              private toastController: ToastController,
              private navController: NavController) {
                this.plt.ready().then(()=>{
                  this.loadDatos();
                });
               }

  mostrarMenu(){
    this.menuController.open('first');
    }

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  addDatos(){
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Usuario>{};
      this.showToast('Datos Agregados!');
      this.loadDatos();
    })
  }

  updateDatos(dato: Usuario){
    dato.nombre = `UPDATED: ${dato.nombre}`;
    dato.apellido = `UPDATED: ${dato.apellido}`;
    dato.correo = `UPDATED: ${dato.correo}`;
    dato.sede = `UPDATED: ${dato.sede}`;
    dato.marca = `UPDATED: ${dato.marca}`;
    dato.modelo = `UPDATED: ${dato.modelo}`;
    dato.patente = `UPDATED: ${dato.patente}`;
    dato.color = `UPDATED: ${dato.color}`;
    dato.tipoUser = `UPDATED: ${dato.tipoUser}`;
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  deleteDatos(dato: Usuario){
    this.storageService.deleteDatos(dato.rut).then(item=>{
      this.showToast('Elemento Eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  onSubmit(){
    console.log('submit');
    console.log(this.datos);
  }
  
  async logout(){
    console.log('loggedout');
    localStorage.removeItem('ingresado')
    this.navController.navigateRoot('login');
  }
}

