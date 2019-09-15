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
    ,{
      nombre: 'img2',
      imagen: 'assets/imagenes/img2.png',
      audio: 'assets/sonidos/img3.mp3'

    } ,{
      nombre: 'img3',
      imagen: 'assets/imagenes/img3.png',
      audio: 'assets/sonidos/img2.mp3'

    } ,{
      nombre: 'img4',
      imagen: 'assets/imagenes/img4.png',
      audio: 'assets/sonidos/img4.mp3'

    },{
      nombre: 'img5',
      imagen: 'assets/imagenes/img5.png',
      audio: 'assets/sonidos/img5.mp3'

    }
  ]
    reproducirSonido(instrumento){
      //console.log(instrumento)
      let sonido = new Audio();

      sonido.src = instrumento.audio;
      
      sonido.load();
      
      sonido.play();
      
    }

}
