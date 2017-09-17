import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { CodingTracksComponent } from './coding-tracks.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProblemsComponent } from './problems/problems.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
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
