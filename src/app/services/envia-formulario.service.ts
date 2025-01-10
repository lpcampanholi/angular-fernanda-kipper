import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  EnviaFormulario(texto: string) {
    console.log(texto);
  }

}
