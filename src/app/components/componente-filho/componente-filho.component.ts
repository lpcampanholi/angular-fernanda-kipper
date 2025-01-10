import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  standalone: true,
  imports: [],
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css'
})
export class ComponenteFilhoComponent {
  name = "LP";
  @Input("name") minhaProps!: string;
  @Output() emitindoValorName = new EventEmitter<string>();

  submitFormFilho(event: any) {
    event.preventDefault();
    this.emitindoValorName.emit(this.name);
    console.log("formulário enviado");
  }
}
