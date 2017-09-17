import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Problem, CodingTrack, CodingChallenge } from '../models/problem.interface';

@Injectable()
export class FireService {

    constructor(private db: AngularFireDatabase) {}

    getProblem(id: string): Promise<Problem>{
        return new Promise(
            resolve => {
                this.db.object(`/coding-problems/${id}`).subscribe(
                    prob => {
                        return resolve(prob);
                    }
                );
            }
        );
    }
    getProblems(ids: string[]): Promise<Problem[]> {
        return new Promise(
            resolve => {
                let problems: Problem[] = new Array();
                ids.forEach(id => {
                    this.db.object(`/coding-problems/${id}`).subscribe(
                        prob => {
                            problems.push(prob);
                        },
                        err => {
                            console.log(err);
                        }                        
                    )
                });
                return resolve(problems);
            }
        );
    }
    getCodingTrack(trackID: string): Promise<CodingTrack> {
        return new Promise(
            resolve => {
                this.db.object(`/coding-tracks/${trackID}`).subscribe(
                    track => {
                        return resolve(track);
                    }
                );
            }
        );
    }
    getCodingTracks(): Promise<CodingTrack[]> {
        return new Promise(
            resolve => {
                this.db.list(`/coding-tracks`).subscribe(
                    tracks => {
                        return resolve(tracks);
                    }
                );
            }
        );
    }
    getCodingChallenge(name: string): Promise<CodingChallenge> {
        return new Promise(
            resolve => {
                this.db.object(`/coding-challenges/${name}`).subscribe(
                    challenge => {
                        resolve(challenge);
                    }
                );
            }
        );
    }

}