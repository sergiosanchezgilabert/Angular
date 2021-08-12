import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';
import { ResponsePersona } from '../models/reques-response';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.scss']
})
export class EditarPersonaComponent implements OnInit {

  persona:ResponsePersona;
  
  showPersona:boolean;

  constructor( private route: ActivatedRoute,private personasService: PersonasService) { }

  ngOnInit(): void {
       this.route.paramMap.subscribe((param)=>
      {
        this.showPersona=false;
        this.personasService.getPersona(param.get("id"))
        .subscribe( (resp) => {
          this.persona=resp;
          this.showPersona=true;
        });
      });
   }

 
}
