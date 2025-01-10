import { Component, signal } from '@angular/core';
import { ComponenteFilhoComponent } from "../componente-filho/componente-filho.component";

@Component({
  selector: 'app-componente-pai',
  standalone: true,
  imports: [ComponenteFilhoComponent],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent {
  count = signal(0);

  logar(event: string) {
    console.log(event);
  }

  incrementar() {
    this.count.update(value => value + 1);
  }

}
