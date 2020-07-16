import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service'; //paso 10 importacion est esta
import {Router} from '@angular/router';// importamos router para poder accede a otras paginas
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;// 14 creamos estas dos variables
  password:string;
  constructor(private authService: AuthService, public router: Router) { }// 11 con esto ya tenemos aceso a todos los metodos de auth tambien agregamos router publico

  ngOnInit() {
  }
onsubmitLogin()// 12 creando el evento para enviar la info  el siguiente paso es copiar esto en el boton de login (click)= "OnsubmitLogin()"
{

 this.authService.login(this.email, this.password).then(res =>{
    this.router.navigate(['folder/Inbox']);
 }).catch(err => alert('El usuario no existe, verifique  su correo o la contraseña'))

}
//paso 15 usamos el metodo [(ngModel)]="email" y tambien [(ngModel)]="password" en los imputs de las etiquetas de formulario


}
