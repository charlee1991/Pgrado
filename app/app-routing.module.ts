import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guardias/auth.guard';// 1g- importamos esto antes de generar una un archivo con este comando ionic g guard guardias/auth
import {NologuearGuard} from './guardias/nologuear.guard';//no_logear 1- importar este componente ts

//estos pasos de seguridad son; authguard para permitir el acceso a la informacion una vez logeado y nologearguard para restringir el acceso a login despues de autenticarse
const routes: Routes = [//Nota importante a cada ruta de un componente nuevo diferente de login o registro  toca aplicarle el utenticador de logeo canActivate: [AuthGuard]!!!!!!!!!
  {    path: '',   redirectTo: 'login',   pathMatch: 'full'  },
  {    path: 'folder/:id',    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule) , canActivate: [AuthGuard] },//2g- agregamos en la pagina principal esto canActivate: [AuthGuard]
  {   path: 'login',    loadChildren: () => import('./compenentes/login/login.module').then( m => m.LoginPageModule), canActivate:[NologuearGuard]  },//no_logear 2 -  canActivate:[NologuearGuard] 
  {    path: 'registro',    loadChildren: () => import('./compenentes/registro/registro.module').then( m => m.RegistroPageModule), canActivate:[NologuearGuard] },
  {    path: 'chatt',    loadChildren: () => import('./compenentes/chatt/chatt.module').then( m => m.ChattPageModule) },
  {
    path: 'chats',
    loadChildren: () => import('./servicios/chats/chats.module').then( m => m.ChatsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
