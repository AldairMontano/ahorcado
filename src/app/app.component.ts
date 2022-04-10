import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'ahorcado';
  palabra = 'PROGRAMADOR';
  palabraOculta = '';

  intentos = 0;

  gana = false;
  pierde = false;

  letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(unow) {
    this.errorLetra(unow);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === unow) {
        palabraOcultaArr[i] = unow;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.ganaPierde();
  }

  ganaPierde() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gana = true;
    }

    if (this.intentos >= 9) {
      this.pierde = true;
    }
  }

  errorLetra(unow) {
    if (this.palabra.indexOf(unow) >= 0) {
      //encontro la letra
      console.log('letra existe');
    } else {
      this.intentos++;
    }
  }
}
