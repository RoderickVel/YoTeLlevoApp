import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController, MenuController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup,
         FormControl,
         Validators,
         FormBuilder} from '@angular/forms';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { getLongitude } from 'geolib';
import { RespuestaUbicacion } from '../../interfaces/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder,
              private menuController: MenuController,
              private ubicacionService: UbicacionService) {
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("",Validators.required),
                  'password': new FormControl("",Validators.required),
                })
              }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value; 
    var a = 0;
    this.registroService.getDatos().then(datos=>{ 

      for(let obj of datos){
        if(obj.correo===f.correo && obj.password===f.password){
          a=1;
          if(obj.tipoUser==="conductor"){
            console.log('ingresadoA');
            localStorage.setItem('ingresado', 'true');
            this.navController.navigateRoot('llevar');
            
            
          }else {
            console.log('ingresadoB');
            localStorage.setItem('ingresado', 'true');
            this.navController.navigateRoot('viajar');
          }
        }
      }
      if(a==0){
        this.alertMsg();
      }
    })
  }//findelmetodo

  async alertMsg(){
    const alert = await this.alertController.create({
      header:'Error..',
      message:'Los datos ingresados son incorrectos',
      buttons:['Aceptar'],
    });
    await alert.present();
    return;
  }

  mostrarMenu(){
    this.menuController.open('first');
    }
}
