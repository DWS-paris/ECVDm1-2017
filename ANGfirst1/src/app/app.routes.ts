// Importer les class pour configurer le module de route
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importer les composants à utiliser dans les routes
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Déclaration des routes dans une constante
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
]
// Exporter le module de route
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)