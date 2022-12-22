import { Component } from '@angular/core';
import { Conta } from 'src/app/Conta';
import { conta } from 'src/app/mock-conta';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  Conta:Conta = conta;

  constructor(){}

  calcularBalance(){
    this.Conta.balance = this.Conta.presupuesto - this.Conta.gastos; 
  }
}
