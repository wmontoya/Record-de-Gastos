import { Component, OnInit, ViewChild } from '@angular/core';
import { presupuesto } from 'src/app/mock-presupuesto';
import { Presupuesto } from 'src/app/Presupuesto';
import { conta } from 'src/app/mock-conta';
import { Conta } from 'src/app/Conta';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild(FooterComponent) footer: any;
  new_nombre = "";
  new_categoria = "";
  new_monto = NaN;

  nombre;
  presuestoEditado: Presupuesto = { nombre: "", categoria: "", monto: 0 };
  Title = 'Edición';




  constructor(private router: ActivatedRoute,private _route: Router) {

    this.nombre = this.router.snapshot.paramMap.get('id');
    presupuesto.forEach(element => {
      if (element.nombre == this.nombre) {
        this.presuestoEditado = element;
        this.new_nombre = this.presuestoEditado.nombre;
        this.new_categoria = this.presuestoEditado.categoria;
        this.new_monto = this.presuestoEditado.monto;
      }
    });
  };

  ngOnInit(): void {

  }

  add_registro() {
    presupuesto.forEach(element => {
      if (element.nombre == this.nombre) {
        this.presuestoEditado = element;
        this.presuestoEditado.nombre = this.new_nombre;
        this.presuestoEditado.categoria = this.new_categoria;
        this.presuestoEditado.monto = this.new_monto;
      }
    });

    this.footer.calcularBalance();
    this._route.navigate(['/calcular']);
  }
  cancelar(){
    this._route.navigate(['/calcular']);
  }

}
