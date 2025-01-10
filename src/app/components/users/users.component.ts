import { EnviaFormularioService } from './../../services/envia-formulario.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

type User = {
  id: number,
  name: string
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {

  name = "lp";
  myBoolean = false;
  number = 12;
  deveMostrarTitulo = false;
  users: User[] = [
    { id: 1, name: "roger" },
    { id: 2, name: "david" },
    { id: 3, name: "jones" },
    { id: 4, name: "stuwart" },
    { id: 5, name: "cróvis" },
  ]
  private EnviaFormularioService = inject(EnviaFormularioService);

  updateBoolean(value: boolean) {
    this.myBoolean = value;
  }

  sayGreetings() {
    alert("Greetings!");
  }

  submitForm(event: any) {
    event.preventDefault();
    console.log(event);
  }

  toggleTitle() {
    if (this.deveMostrarTitulo) {
      this.deveMostrarTitulo = false;
    } else {
      this.deveMostrarTitulo = true;
    }
  }

  submit(event: any) {
    event.preventDefault();
    this.EnviaFormularioService.EnviaFormulario("enviando informação para o backend");
  }

}
