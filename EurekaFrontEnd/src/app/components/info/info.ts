import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MeuServicoService } from '../../services/meu-servico';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    MatInputModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  constructor(private meuServico: MeuServicoService) { }
  
  @Output() cnpj: EventEmitter<string> = new EventEmitter();

  dados: any[] = [];

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.meuServico.getDados().subscribe(
      (resposta) => {
        this.dados = resposta;
      },
      (erro) => {
        console.error('Erro ao carregar dados', erro);
      }
    );
  }
}
