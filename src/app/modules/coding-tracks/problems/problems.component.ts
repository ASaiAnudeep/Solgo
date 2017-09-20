import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FireService } from '../../../services/firebase.service';
import { WebService } from '../../../services/web.service';
import { Problem, ProblemDetail } from '../../../models/problem.interface';

declare var app;
declare var PR;

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css'],
  providers: []
})
export class ProblemsComponent implements OnInit, AfterViewChecked {
  currentProblemID: string;
  currentProblem: Problem;
  codeC: string;
  codeCPP: string;
  codeJava: string;
  codeCSharp: string;
  codePython: string;
  codeUpdated: number;
  isCodeDownloaded: boolean;
 

  constructor(private ar: ActivatedRoute, private fire: FireService, private web: WebService) {
    this.codeUpdated = 0;
    this.isCodeDownloaded = false;
   }

  ngOnInit() {
    this.ar.params.subscribe(res => {
      this.currentProblemID = res['id'];
      this.fire.getProblem(this.currentProblemID).then(prob => this.currentProblem = prob);
      this.fire.getProblemDetails(this.currentProblemID).then(probDetail => this.currentProblem.problemDetail = probDetail);
      this.web.getCode(this.currentProblemID, 'c').then(code => this.codeC = code);
      this.web.getCode(this.currentProblemID, 'cpp').then(code => this.codeCPP = code).catch(code => this.codeCPP = code);
      this.web.getCode(this.currentProblemID, 'java').then(code => this.codeJava = code);
      this.web.getCode(this.currentProblemID, 'csharp').then(code => this.codeCSharp = code);
      this.web.getCode(this.currentProblemID, 'python').then(code => this.codePython = code);
    });
  }

  ngAfterViewChecked() {
    if (this.hasDownloaded()) {
      if(this.codeUpdated < 10) {
        this.isCodeDownloaded = true;
        PR.prettyPrint();
        app.initializeTabs();   
        this.codeUpdated = this.codeUpdated + 1;
      }
    }
   }
   
   is(code: string): boolean {
     return (code !== undefined)
   }

   hasDownloaded(): boolean {
     if (this.isCodeDownloaded) {
       return true;
     }
    return (this.is(this.codeC) && this.is(this.codeCPP) && this.is(this.codeJava) && this.is(this.codeCSharp) && this.is(this.codePython));
   }

}
