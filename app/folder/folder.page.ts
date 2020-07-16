import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../servicios/auth.service';//no borrar - esta importacion es para usar la funcion de cerrar sesion

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  constructor(private activatedRoute: ActivatedRoute, public authService: AuthService) { }//ponemos en metodo publico authservices para validar la funcion outlog
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  Onlogout(){
    this.authService.logout();//este es el llamado al metodo final para cerrar secion 
    //se creo logout en servicios/auth "metodos de servicios de autenticacion", luego en el ts de la pagina principal que es esta se creo la funcion Onlogout para llamar a logout y ser usado en el boton de html 
  }

}
