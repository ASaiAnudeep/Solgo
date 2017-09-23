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
  currentTrack: CodingTrack;
  currentChallenge: CodingChallenge;
  trackChallenges: CodingChallenge[] = new Array();
  currentProblems: Problem[] = new Array();

  constructor(private ar: ActivatedRoute, private fire: FireService) {
  }

  ngOnInit() {
    this.ar.params.subscribe(res => {
      this.fire.getCodingTrack(res['id']).then(track => {
        this.currentTrack = track;
        this.currentTrack.challenges.split(';').forEach(challenge => {
          this.fire.getCodingChallenge(challenge).then(challenge => {
            this.trackChallenges.push(challenge);
            if (this.trackChallenges.length === 1) {
              this.showChallengeProblems(0);
            }
          });
        });
      });
    });
  }

  showChallengeProblems(i: number): void {
    if (this.trackChallenges[i].problems === undefined) {
      console.log('if');
      this.fire.getProblems((this.trackChallenges[i].problemNumbers + '').split(';')).then(
        problems => {
          this.trackChallenges[i].problems = problems;
          this.currentProblems = problems;
        }
      );
    } else {
      console.log('else');
      this.currentProblems = this.trackChallenges[i].problems;
    }
    this.currentChallenge = this.trackChallenges[i];
  }
}
