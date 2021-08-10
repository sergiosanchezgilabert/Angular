import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {
 }

  formulario(){
    this.router.navigateByUrl('formulario'); 
  }
  
}
