import { Component,ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { conta } from 'src/app/mock-conta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Title = 'Inicio';
  @ViewChild(FooterComponent) footer: any;

  constructor(private route: Router){}

  monto = NaN;
  divisa = "";
  
  enviar(){
    conta.divisa = this.divisa;
    conta.presupuesto = this.monto;
    conta.presupuesto = this.monto;
    this.footer.calcularBalance();
    this.route.navigate(['/calcular']);
  }

}
