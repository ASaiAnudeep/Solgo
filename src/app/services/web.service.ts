import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    constructor(private http: Http) {}

    getCode(problemID: string, language: string): Promise<string> {
        return new Promise(
            resolve => {
                this.http.get(`assets/coding-problems/p${problemID}/${language}.txt`).subscribe(
                    data => {
                        return resolve(data.text());
                    },
                    err => {
                        return resolve('No Code Available');
                    }
                );
            }
        );
    }

}