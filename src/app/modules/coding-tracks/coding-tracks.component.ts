import { Component, OnInit } from '@angular/core';

import { FireService } from '../../services/firebase.service';

import { CodingTrack } from '../../models/problem.interface';

@Component({
  selector: 'app-coding-tracks',
  templateUrl: './coding-tracks.component.html',
  styleUrls: ['./coding-tracks.component.css']
})
export class CodingTracksComponent implements OnInit {
  codeTracks: CodingTrack[];

  constructor(private fire: FireService) { }

  ngOnInit() {
    this.fire.getCodingTracks().then(tracks => this.codeTracks = tracks);
  }

}
