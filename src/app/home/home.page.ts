import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private regresa: Router) {}
  regresar(){
   this.regresa.navigateByUrl("/intro")
  }
}
