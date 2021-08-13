import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniadirPersonaComponent } from './aniadir-persona/aniadir-persona.component';
import { AppComponent } from './app.component';
import { BorrarPersonaComponent } from './borrar-persona/borrar-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'aniadir',
    component: AniadirPersonaComponent
  },
  {
    path: 'editar/:id',
    component: EditarPersonaComponent
  },
  {
    path: 'borrar',
    component: BorrarPersonaComponent
  },
  {
    path: 'inicio',
    component: AppComponent
  },
  {
    path: 'lista',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
