import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    user:             [''],
    password:         [''],
    surname:          [''],
    company_email:    [''],
    personal_email:   [''],
    city:             [''],
    active:           [true],
    create_date:      [''],
    imagen_url:       [''],
    termination_date: [''],
  });

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registerForm.value);
  }

  refrescar(){
    this.registerForm.patchValue({
      user:             '',
      password:         '',
      surname:          '',
      company_email:    '',
      personal_email:   '',
      city:             '',
      active:           true,
      create_date:      '',
      imagen_url:       '',
      termination_date: '',
    })
  }

}
