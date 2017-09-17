import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

export const HomeRoutes: Routes = [
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent }
];