import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
import {DataService} from '../data.service';
@Component({
  selector: 'app-suadoitaikhoan',
  templateUrl: './suadoitaikhoan.component.html',
  styleUrls: ['./suadoitaikhoan.component.css']
})
export class SuadoitaikhoanComponent implements OnInit {
  constructor(private ds:DataService) { }
  loggedStudent;
  students;
  ngOnInit() {
    this.ds.getstudents().subscribe(data=>{
      this.students=data;
      this.loggedStudent=this.students.find(x=>{
        return x.username==this.ds.username
      });
      console.log('loggedStudent',this.loggedStudent)
    })
  }
  luuThayDoi(){
    alert('đã thay đổi thành công!')
}
}
