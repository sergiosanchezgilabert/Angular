import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AniadirPersonaComponent } from './aniadir-persona/aniadir-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { BorrarPersonaComponent } from './borrar-persona/borrar-persona.component';
import { ListarComponent } from './listar/listar.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    FormularioComponent,
    AniadirPersonaComponent,
    EditarPersonaComponent,
    BorrarPersonaComponent,
    ListarComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
