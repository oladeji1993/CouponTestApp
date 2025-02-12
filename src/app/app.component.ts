import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesModule } from './Core/pipes/pipes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, PipesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
  
}
