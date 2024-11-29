import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { GlobalErrorComponent } from "./component/global-error/global-error.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NavbarComponent, RouterOutlet, GlobalErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Student Profile';
  
}
