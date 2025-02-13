import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesModule } from './Core/pipes/pipes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, PipesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {

  ngOnInit(): void {
    this.loadStyles('styles.scss');
    this.loadStyles('output.css');
    this.loadStyles('./output.css');
  }

  loadStyles(cssFilePath: string): void {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = cssFilePath;
    document.head.appendChild(linkElement);
  }
  
}
