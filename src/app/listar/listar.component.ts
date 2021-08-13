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

  @Input() contador:ContadorComponent=new ContadorComponent();

  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit(): void {

    this.personasService.cargarPersonas()
      .subscribe((resp) => {
        this.personas = resp;
      });
  }


  procesarBorrado(id: number) {
    console.log(this.contador.numero)

    this.personas.splice(id-1, 1);
    this.contador.sumar();
    console.log(this.contador.numero)
  }
}
