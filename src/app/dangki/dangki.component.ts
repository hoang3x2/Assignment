import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
import { DataService } from '../data.service';
import { FirebaseServiceService } from '../firebase-service.service'
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {
  formSudent = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: new Date().toISOString().substring(0, 10),
  }
  students:any[];
  constructor(private ds: DataService, private fb: FirebaseServiceService,private db:AngularFireDatabase) { }

  ngOnInit() {
    this.students=this.fb.students;
  }
  Addthongtin() {
    this.fb.students.push(this.formSudent);
    this.db.list('/Students').push(this.formSudent);
    this.formSudent = {
      username: "",
      password: "",
      fullname: "",
      email: "",
      gender: "",
      birthday: new Date().toISOString().substring(0, 10),
    }
  }

}
