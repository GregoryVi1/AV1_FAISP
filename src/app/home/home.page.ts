import { Component } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  altura;
  peso;
  imc;
  res;
  
  cal(){
     this.imc = (this.peso / (this.altura * this.altura)).toFixed(2);
     this.altura / 100;

    if ((this.imc >= 18.5 ) && (this.imc <= 24.9 )) {
        return this.res = ('normal');
    }
      else if ((this.imc >= 25) && (this.imc <= 29.9))  {
        return this.res = ("Sobrepeso");
    }
      else if ( this.imc >= 30 ) {
        return this.res = ("Obesidade");
    }
      else{
        return this.res = ("Obesidade Grave")
    }}}

