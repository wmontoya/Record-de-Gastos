import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { presupuesto } from 'src/app/mock-presupuesto';
import { Presupuesto } from 'src/app/Presupuesto';
import { conta } from 'src/app/mock-conta';
import { Conta } from 'src/app/Conta';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  @ViewChild(FooterComponent) footer: any;
  Conta:Conta = conta;
  Title = 'Calculadora';
  displayedColumns: string[] = ['nombre', 'categoria', 'monto', 'acciones'];
  dataSource = presupuesto;

  new_nombre = "";
  new_categoria = "";
  new_monto = NaN;

  ngOnInit(): void {
    this.sumatoria();
  }

  constructor(private route: Router) {
   
   }

  add_registro() {
    const newData = [...this.dataSource];
    newData.push({ nombre: this.new_nombre, categoria: this.new_categoria, monto: this.new_monto });
    this.dataSource = newData;
    this.sumatoria();
    
    this.clean();
  }

  update(registro: Presupuesto) {
    this.route.navigate(['/editar',registro.nombre]);
  }

  delete(registro: Presupuesto) {
    this.dataSource = this.dataSource.filter((c) => c.nombre !== registro.nombre);
    this.dataSource = presupuesto.filter((c) => c.nombre !== registro.nombre);
    this.footer.calcularBalance();
  }

  clean() {
    this.new_nombre = "";
    this.new_categoria = "";
    this.new_monto = NaN;

  }

  sumatoria() {
    presupuesto.forEach(element => {
      if (element.categoria == "Egreso") {
        this.Conta.gastos = this.Conta.gastos + element.monto;
      }
      if (element.categoria == "Ingreso") {
        this.Conta.presupuesto = this.Conta.presupuesto + element.monto;
      }
      this.Conta.balance = (this.Conta.presupuesto - this.Conta.gastos);
    });
    this.footer.calcularBalance();
  }

}
