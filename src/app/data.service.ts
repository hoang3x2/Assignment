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
  public fullname="";
  public checkdangnhap:Boolean=true;
  public formsaukhidangki;
  students=[
    {
        "username": "teonv",
        "password": "iloveyou",
        "fullname": "Nguyễn Văn Tèo",
        "email": "teonv@fpt.edu.vn",
        "gender": "true",
        "birthday": "1995-12-21",
        "schoolfee": "1500000",
        "marks": "0"
    },
    {
        "username": "pheonv",
        "password": "iloveyou",
        "fullname": "Nguyễn Văn Chí Phèo",
        "email": "pheonv@fpt.edu.vn",
        "gender": "true",
        "birthday": "1985-10-11",
        "schoolfee": "2500000",
        "marks": "0"
    },
    {
        "username": "nopt",
        "password": "iloveyou",
        "fullname": "Phạm Thị Nở",
        "email": "nopt@fpt.edu.vn",
        "gender": "false",
        "birthday": "1993-05-15",
        "schoolfee": "2000000",
        "marks": "0"
    }
]
  // getchuaform(){
  //   return this.http.get(this.formsaukhidangki)
  // }
  adddangki(u){
    this.students.push(u);
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
