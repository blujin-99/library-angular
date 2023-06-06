import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Componente de Breadcrumb reutilizable que muestra una barra de navegación en forma de migas de pan.
 */
@Component({
    selector: 'app-breadcrumb',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
    /**
     * Arreglo de objetos que representa los elementos de breadcrumb.
     * Cada objeto tiene una propiedad `nombre` obligatoria y una propiedad `ruta` opcional.
     */
    @Input({ required: true }) breadcrumbs: {
        nombre: string;
        ruta?: string;
    }[] = [];
}
