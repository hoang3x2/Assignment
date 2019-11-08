import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }
  urlSubj='assets/db/Subjects.json';
  urlStudenst='assets/db/Students.json';
  public username;
  public checkdangnhap:Boolean=true;
  


  themTen(u){
    this.username=u;
  }
  getSubjects(){
    return this.http.get(this.urlSubj);
  }
  getQuiz(url:string){
    return this.http.get(url);
  }
  getstudents(){
    return this.http.get(this.urlStudenst)
  }

}
