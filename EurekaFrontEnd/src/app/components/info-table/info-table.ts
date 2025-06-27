import { Component, Input, SimpleChanges } from '@angular/core';
import { Campo } from '../campo/campo';
import { MeuServicoService } from '../../services/meu-servico';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-table',
  imports: [
    Campo,
    CommonModule
  ],
  templateUrl: './info-table.html',
  styleUrl: './info-table.css'
})
export class InfoTable {
  constructor(private meuServico: MeuServicoService) { }
  
  @Input() cnpj: string = 'teste'

  dados: any;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['cnpj']) {
      this.carregarDados()
    }
  }

  carregarDados(): void {
    this.meuServico.getDadosByCnpj(this.cnpj).subscribe(
      (resposta) => {
        this.dados = resposta;
      },
      (erro) => {
        console.error('Erro ao carregar dados', erro);
      }
    );
  }
}
