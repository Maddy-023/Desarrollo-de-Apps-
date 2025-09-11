import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- NECESARIO para ngFor, ngIf
import { DataService } from '../data.service';

@Component({
  selector: 'app-componente-uno',
  standalone: true,
  imports: [CommonModule], // <-- AGREGA AQUÍ
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css'] // ojo: debe ser "styleUrls"
})
export class ComponenteUnoComponent implements OnInit {

  personajes: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.obtener().subscribe({
      next: (res: any) => {
        this.personajes = res.results;
      },
      error: (err) => {
        console.error('Error al cargar personajes:', err);
      }
    });
  }
}
