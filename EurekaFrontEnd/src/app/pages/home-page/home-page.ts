import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Info } from '../../components/info/info';
import { InfoTable } from '../../components/info-table/info-table';
import { Filtro } from '../../components/filtro/filtro';

@Component({
  selector: 'app-home-page',
  imports: [
    Header,
    Info,
    InfoTable,
    Filtro
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  cnpj: string = 'test'

  setCnpj(event : string) {
    this.cnpj = event
  }

  check() {
    console.log(this.cnpj)
  }
}
