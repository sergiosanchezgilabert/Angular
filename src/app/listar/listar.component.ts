import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContadorComponent } from '../contador/contador.component';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public personas: any = []

  contador: ContadorComponent = new ContadorComponent();

  numero: string | null = "";

  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit(): void {

    this.personasService.cargarPersonas()
      .subscribe((resp) => {
        this.personas = resp;
      });
    this.contador.numero = Number( localStorage.getItem("numero"));
    this.numero=localStorage.getItem("numero");
  }


  procesarBorrado(id: number) {
    console.log(this.contador.numero)

    this.personas.splice(id - 1, 1);
    this.contador.sumar();
    localStorage.setItem("numero", this.contador.numero.toString())
    this.numero=localStorage.getItem("numero");
    console.log(this.contador.numero)
  }
}
