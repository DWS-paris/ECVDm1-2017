import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/dashboard" >Dashboard</a>
    <!-- Utiliser la directive pour afficher le contenu des routes -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  

}
