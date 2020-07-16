// paso 1 y 2 no_login estan en qpp-routing.module.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';//3 no_login - importamos esto para saber si el usuario esta autenticado en firebase
import { auth } from 'firebase';
import {map} from 'rxjs/operators';//5 no_login importamos el map para mapear las autenticaciones
import { isNullOrUndefined } from 'util';//importar
import {Router}from '@angular/router';//importar, no olvide colocarlo en el contructor tambien

@Injectable({
  providedIn: 'root'
})
export class NologuearGuard implements CanActivate {

  constructor(//4-no_login creamos un constructor y llamamos la libreria que importamos
    private AFauth : AngularFireAuth,
    private router: Router
    ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return  this.AFauth.authState.pipe(map(auth=>{// creamos esta linea de codigo con authstate que sirve para verificar las autenticaciones
      if(isNullOrUndefined(auth)){//si no esta logeado dejara entrar al login 
        return true;
      }
      else
      {
        this.router.navigate(['folder/Inbox']);//si  esta logeado retornara a redirigir a  home  
        return true;
      }
     
   
      }))
  }
  
}
