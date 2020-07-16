import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';//add
import { registroPageRoutingModule } from './registro-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { registroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    registroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [registroPage]
})
export class RegistroPageModule {}
