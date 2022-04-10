import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'ahorcado';
  palabra = 'PUTO';
  palabraOculta = '';

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
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === unow) {
        palabraOcultaArr[i] = unow;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
  }
}
