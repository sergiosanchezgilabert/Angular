import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatButtonModule } from '@angular/material/button';
import { PersonasService } from './services/personas.service';
import { ContadorComponent } from './contador/contador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  public personas: any = []

  public contador:ContadorComponent=new ContadorComponent();

  constructor(private personasService: PersonasService, private router: Router) {
  }

  formulario() {
    this.router.navigateByUrl('formulario');
  }

  aniadir() {
    this.router.navigateByUrl('aniadir');
  }

  ngOnInit(): void {

    this.personasService.cargarPersonas()
      .subscribe((resp) => {
        this.personas = resp;
      });
  }


  procesarBorrado(id: number) {
    console.log(this.contador.numero)

    this.personas.splice(Number, 1);
    this.contador.sumar();
    console.log(this.contador.numero)
  }

}
