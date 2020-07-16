// paso 7 aqui creamos nuestros metodos de autenticacion 
import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';// 8 importamos esto
import {Router} from '@angular/router';// esto lo usamos para redirigir al usuario al login cuando haya cerrado sesion nota: colocarlo en el contructor para usar las propiedades

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFauth : AngularFireAuth,
    private router :Router) {//modificamos el contructor con esta info para usar autenticacion 
   }  
   login (email:string, password:string){
    return new Promise ((resolve, rejected)=>{//hacemos una ´promesa que devuelve una notificacion
      this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user);//imprime la respuesta de autenticacion del servidor
      }).catch(err =>rejected(err));//lo mismo
      //9 devemos importar este elemento en  login.page.ts
    })        
  }
  //funcion para cerrar sesion 
    logout(){//despues de hacer esta funcion y tener el boton ahora vamos al archivo ts de home o inbox o folder como le llamen, e importamos el logout
      this.AFauth.signOut().then(()=> {
        this.router.navigate(['login']);//funcion para cerrar sesion y redirigir a login
      })
    }
}
