import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'clase'; 
  
  personajes: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.obtener().subscribe({
      next: (res) => {
        this.personajes = res.results; // Rick and Morty API devuelve "results"
      },
      error: (err) => {
        console.error('Error al cargar personajes:', err);
      }
    });
  }
}
