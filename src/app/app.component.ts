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
  
  public contador:ContadorComponent;

  constructor(private personasService: PersonasService, private router: Router) {
  }

  aniadir() {
    this.router.navigateByUrl('aniadir');
  }

  listaPersonas() {
    this.router.navigateByUrl('lista');
  }

  ngOnInit(): void {
  }

}
