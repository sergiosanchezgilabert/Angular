import { Component, OnInit } from '@angular/core';
import {  } from '../models/reques-response';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  public personas: any = []

  constructor( private personasService: PersonasService) { 
  }

  ngOnInit(): void {
var persona;
    this.personasService.cargarPersonas()
    .subscribe( (resp) => {
      console.log(resp[0].user)
      this.personas=resp;
      console.log(this.personas)
    });


  }
}
