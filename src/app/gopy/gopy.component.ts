import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gopy',
  templateUrl: './gopy.component.html',
  styleUrls: ['./gopy.component.css']
})
export class GopyComponent implements OnInit {
  formSudent = {
    one: "",
    two: "",
    three: "",
    four: "",
  }
  constructor() { }

  ngOnInit() {
  }
  checkgui(){
    this.formSudent = {
      one: "",
      two: "",
      three: "",
      four: "",
    }
    alert('Đã gửi thành công!')
  }
}
