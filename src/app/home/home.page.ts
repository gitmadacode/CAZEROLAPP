import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  instrumentos = [
    {
      nombre: 'img1',
      imagen: 'assets/imagenes/img1.png',
      audio: 'assets/sonidos/img1.mp3'

    }
    , {
      nombre: 'img2',
      imagen: 'assets/imagenes/img2.png',
      audio: 'assets/sonidos/img3.mp3'

    }
  ];
    reproducirSonido(instrumento) {
      // console.log(instrumento)
      const sonido = new Audio();

      sonido.src = instrumento.audio;

      sonido.load();

      sonido.play();

    }

}
