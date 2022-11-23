import { Component, OnInit } from '@angular/core';
import { AlertController, mdTransitionAnimation } from '@ionic/angular';
import { RegistroserviceService, Usuario} from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup; 
  newUsuario: Usuario = <Usuario>{};

  constructor(private alertController: AlertController, 
              private registroService: RegistroserviceService, 
              private toastController: ToastController, 
              private fb: FormBuilder,
              private menuController: MenuController) {
                this.formularioRegistro = fb.group({ 
                  'nombre' : new FormControl("", Validators.required),
                  'correo' : new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.required),
                  'confirmaPass': new FormControl("", Validators.required),
                  'patente':new FormControl(""),
                  'marca':new FormControl(""),
                  'modelo':new FormControl(""),
                  'color':new FormControl(""),
                  'apellido':new FormControl("", Validators.required),
                  'rut':new FormControl("", Validators.required),
                  'sede':new FormControl("", Validators.required),
                  'tipoUser' :new FormControl("",Validators.required)
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value; 
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({ 
        header: 'Error..',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
    else{
      this.newUsuario.nombre = form.nombre;
      this.newUsuario.correo = form.correo;
      this.newUsuario.password = form.password;
      this.newUsuario.repass= form.confirmaPass;
      this.newUsuario.patente= form.patente;
      this.newUsuario.marca= form.marca;
      this.newUsuario.modelo= form.modelo;
      this.newUsuario.color= form.color;
      this.newUsuario.apellido= form.apellido;
      this.newUsuario.rut= form.rut;
      this.newUsuario.sede= form.sede;
      this.newUsuario.tipoUser= form.tipoUser;
      this.registroService.addDatos(this.newUsuario).then(dato=>{
        this.newUsuario = <Usuario>{};
        this.showToast('Usuario Creado!');
      })
      this.formularioRegistro.reset();
    }//finelse
  }//finmetodo

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    await toast.present();
  }

  mostrarMenu(){
    this.menuController.open('first');
    }





}
