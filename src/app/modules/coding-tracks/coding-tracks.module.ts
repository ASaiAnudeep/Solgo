import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { CodingTracksComponent } from './coding-tracks.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProblemsComponent } from './problems/problems.component';

const CodingTracksRoutes: Routes = [
  { path: 'challenges', component: ChallengesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(CodingTracksRoutes)
  ],
  declarations: [
    CodingTracksComponent,
    ChallengesComponent,
    ProblemsComponent
  ],
  exports: [
    CodingTracksComponent,
    ChallengesComponent
  ]
})
export class CodingTracksModule { }
