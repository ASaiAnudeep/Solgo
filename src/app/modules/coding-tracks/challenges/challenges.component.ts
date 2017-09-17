import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../../../services/firebase.service';

import { CodingTrack, Problem, CodingChallenge } from '../../../models/problem.interface';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  trackID: string;
  currentTrack: CodingTrack;
  currentChallenge: CodingChallenge = new CodingChallenge();
  challenges: string[];
  currentProblems: Problem[] = new Array();
  challengeProblemsMap: any = new Object();

  constructor(private ar: ActivatedRoute, private fire: FireService) {
  }

  ngOnInit() {
    this.ar.params.subscribe(res => {
      this.trackID = res['id'];
      this.fire.getCodingTrack(this.trackID).then(track => {
        this.currentTrack = track;
        this.challenges = this.currentTrack.challenges.split(';');
      });
    });
  }

  showProblems(name: string): void {
    if(this.challengeProblemsMap[name] === undefined) {
      this.fire.getCodingChallenge(name).then(challenge => {
        this.currentChallenge = challenge;
        this.fire.getProblems((this.currentChallenge.problems + '').split(';')).then(
          problems => {
            this.currentProblems = problems;
            this.challengeProblemsMap[name] = problems;
          });
      });
    } else {
      this.currentProblems = this.challengeProblemsMap[name];
    }
  }

}
