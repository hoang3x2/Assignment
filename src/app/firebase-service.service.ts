import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  students: any;
  constructor(private db: AngularFireDatabase) {

  }
  getStudent() {
    return this.db.list('/Students').valueChanges();
    // this.db.list('/Students').valueChanges().subscribe(data => {
    //   this.students = data;
    //   console.log(this.students);
    // });
  }
}
