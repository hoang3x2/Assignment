import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-suadoitaikhoan',
  templateUrl: './suadoitaikhoan.component.html',
  styleUrls: ['./suadoitaikhoan.component.css']
})
export class SuadoitaikhoanComponent implements OnInit {
  constructor(private ds: DataService, private router: Router) { }
  loggedStudent;
  students;
  ngOnInit() {
    if (this.ds.checkdangnhap == false) {
      this.router.navigate(['/dangnhap'])
    }
    else {
        this.students = this.ds.students;
        this.loggedStudent = this.students.find(x => {
          return x.username == this.ds.username
        });
    }
  }
  luuThayDoi() {
    alert('đã thay đổi thành công!')
  }
  
}
