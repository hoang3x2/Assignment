import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import {Router} from '@angular/router'

@Component({
    selector: 'app-trangchu',
    templateUrl: './trangchu.component.html',
    styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
    subject: any;
    sodong = 4;
    sotrang = 1;
    nextpage() {
        if (this.sodong > this.sotrang) {
            this.sotrang++;
        }
    }
    luipage() {
        if (this.sotrang > 1) {
            this.sotrang--;
        }
    }

    constructor(private ds: DataService, private router:Router) { }

    ngOnInit() {
        this.ds.getSubjects().subscribe(data => {
            this.subject = data;
        })
    }
    checkdangnhap_trangchu()
     {
        if (this.ds.checkdangnhap == false) {
            alert('vui long dang nhap!')
            this.router.navigate(['/dangnhap'])
        }
    }

}
