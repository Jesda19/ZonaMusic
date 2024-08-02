import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slides = [
    {
      title: 'Titulo de slide 1',
      icon: 'save',
      avatar:
        'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg?w=740',
      image:
        'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Texto de descripcion',
    },
    {
      title: 'Titulo de slide 2',
      icon: 'save',
      avatar:
        'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg?w=740',
      image:
        'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Texto de descripcion',
    },
    {
      title: 'Titulo de slide 3',
      icon: 'save',
      avatar:
        'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg?w=740',
      image:
        'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Texto de descripcion',
    },
    /* slides nuevos tarea */
    {
      title: 'SETUP GAMER ',
      icon: 'desktop',
      avatar:
        'https://img.freepik.com/psd-premium/diseno-camiseta-kawaii-chibi-boy-cabello-desordenado-casual-gamer-fashio-sticker-png-no-bg_655090-1611311.jpg?w=740',
      image:
        'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Pronto obtendre mi setup y sera el mejor',
      background: '#533bb9',
    },
    {
      title: 'SETUP GAMER 2 ',
      icon: 'desktop',
      avatar:
        'https://img.freepik.com/psd-premium/diseno-camiseta-kawaii-chibi-boy-cabello-desordenado-casual-gamer-fashio-sticker-png-no-bg_655090-1611311.jpg?w=740',
      image:
        'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Pronto obtendre mi setup y sera el mejor',
      background: '#9fd94e',
    },
    {
      title: 'SETUP GAMER 3',
      icon: 'desktop',
      avatar:
        'https://img.freepik.com/psd-premium/diseno-camiseta-kawaii-chibi-boy-cabello-desordenado-casual-gamer-fashio-sticker-png-no-bg_655090-1611311.jpg?w=740',
      image:
        'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Pronto obtendre mi setup y sera el mejor',
      background: 'red',
    },
  ];
  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {}
  close() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('menu/home');
  }
}
