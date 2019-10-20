import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }
  urlSubj='assets/db/Subjects.json';
  getSubjects(){
    return this.http.get(this.urlSubj);
  }
  getQuiz(url:string){
    return this.http.get(url);
  }
}
