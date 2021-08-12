import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsePersona } from '../models/reques-response';
import { PersonasService } from '../services/personas.service';

//Ventaja de validaciones en ts y no en html

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnChanges {

  showAniadir: boolean;

  @Input() persona: ResponsePersona;

  constructor(private formBuilder: FormBuilder, private personasService: PersonasService, private route: ActivatedRoute, private router: Router) { }


  registerForm = this.formBuilder.group({

    user: [''],
    password: [''],
    surname: [''],
    company_email: [''],
    personal_email: [''],
    city: [''],
    active: [true],
    create_date: [''],
    imagen_url: [''],
    termination_date: [''],
  });

  ngOnInit(): void {

    if (this.route.snapshot.url[0].path === 'aniadir') {
      this.showAniadir = true;
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.persona) {
      this.registerForm.patchValue(this.persona)
    }
  }


  submit() {
    console.log(this.registerForm.value);
  }

  refrescar() {

    this.registerForm.reset();
  }

  aniadirDatos() {
    this.personasService.aniadirPersona(this.registerForm.value)
    .subscribe(() => {
      alert("Añadido")
    })
  }

  enviarDatos(id: number) {

    console.log(this.registerForm.value)
    this.personasService.editarPersona(this.registerForm.value, id)
      .subscribe(() => {
        alert("Editado")
      })
    this.router.navigateByUrl('inicio');
  }

}
