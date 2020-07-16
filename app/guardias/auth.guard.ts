
// paso 1g y 2g estan en qpp-routing.module.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';//3g - importamos esto para saber si el usuario esta autenticado en firebase
import { auth } from 'firebase';
import {map} from 'rxjs/operators';//5g- importamos el map para mapear las autenticaciones
import { isNullOrUndefined } from 'util';//importar
import {Router}from '@angular/router';//importar, no olvide colocarlo en el contructor tambien


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private AFauth : AngularFireAuth,
    private router: Router
    ){}//4-g creamos un constructor y llamamos la libreria que importamos

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return  this.AFauth.authState.pipe(map(auth=>{// creamos esta linea de codigo con authstate que sirve para verificar las autenticaciones
      if(isNullOrUndefined(auth)){//si el usuario de authstate no esta definido o es nulo retorna un falso no dejara entrar al contenido
        this.router.navigate(['/login']);//si no esta logeado retornara a login 
        return false
      }
      else
      {
        return true//si esta registrado si podra verlo
      }
     
   
      }))
    
  }/**bien aqui finalizamos la seguridad para entrar al contenido ahora debemos evitar q una vez dentro, no permita entrar a login denuevo
  para eso creamos otro ts con el comando ionic g guard guardias/nologuear**/
  
}
