import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routing Modules
import { CodingTracksRoutes } from './modules/coding-tracks/coding-tracks-routing';
import { HomeRoutes } from './modules/home/home-routing';

// Components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', children: HomeRoutes },
    { path: 'coding-tracks', children: CodingTracksRoutes },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const AppComponents = [PageNotFoundComponent];