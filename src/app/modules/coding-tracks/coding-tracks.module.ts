import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';

import { CodingTracksComponent } from './coding-tracks.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProblemsComponent } from './problems/problems.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    SharedModule
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
