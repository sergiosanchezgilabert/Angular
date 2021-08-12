import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsePersona } from '../models/reques-response';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  @Input() persona: ResponsePersona;

  @Output() propagar = new EventEmitter<number>();

  constructor(private personasService: PersonasService, private router: Router) {
  }

  editar(id: number) {
    this.router.navigate(['/editar', id]);
  }

  borrar(id: number) {

    this.personasService.eliminarPersona(id)
      .subscribe((resp) => {
        alert("Eliminado")
      })

    this.propagar.emit(id);
  }

  ngOnInit(): void {

  }
}
