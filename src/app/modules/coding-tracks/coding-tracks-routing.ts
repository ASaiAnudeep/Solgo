
import { Routes } from '@angular/router';
import { CodingTracksComponent } from './coding-tracks.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProblemsComponent } from './problems/problems.component';


export const CodingTracksRoutes: Routes = [
  {path:'',redirectTo:'overview', pathMatch:'full'},
  { path: 'overview', component: CodingTracksComponent },
  { path: 'challenges/:id', component: ChallengesComponent },
  { path: 'problems/:id', component: ProblemsComponent}
];

