// creamos una carpeta llamada componentes y dentro de ella una page llamada login 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';// chat1 -importacion para bases de datos , Settings reemplaza a firestoresettingtoken
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {firebaseConfig} from '../environments/environment';//paso #2 importar la configuracion 
import {AngularFireModule} from "@angular/fire";//paso #3 despues de instalar npm install firebase @angular/fire --save se importa  esto
import {AngularFireAuthModule} from '@angular/fire/auth';// paso#5 importamos el modulo de autenticacion de firebase
//paso 6 generamos un servicio ionic g service servicios/auth
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),//paso 4 importamos aqui para inicializar firebase en la app
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: SETTINGS, useValue:{}}//aqui hay que importar ssettings
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
