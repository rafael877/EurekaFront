import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo',
  imports: [],
  templateUrl: './campo.html',
  styleUrl: './campo.css'
})
export class Campo {
  @Input() Titulo: string = 'placeholder';
  @Input() Valor: string = 'placeholder';


}
