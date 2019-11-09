import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Students } from 'src/app/students';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }
  urlSubj='assets/db/Subjects.json';
  urlStudenst='assets/db/Students.json';
  public username="";
  public checkdangnhap:Boolean=false;
  public chuaformsaukhidoimatkhau;
  // getchuaform(){
  //   return this.http.get(this.chuaformsaukhidoimatkhau)
  // }

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
