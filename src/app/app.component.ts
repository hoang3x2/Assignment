import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router'
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseServiceService } from './firebase-service.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Assignment-3001180274';
    danhmuc = [
        {
            "Id": "ADAV",
            "Name": "Lập trình Android nâng cao",
            "Logo": "ADAV.jpg"
        },
        {
            "Id": "ADBS",
            "Name": "Lập trình Android cơ bản",
            "Logo": "ADBS.jpg"
        },
        {
            "Id": "ADTE",
            "Name": "Kiểm thử và triển khai ứng dụng Android",
            "Logo": "ADTE.jpg"
        },
        {
            "Id": "ADUI",
            "Name": "Thiết kế giao diện trên Android",
            "Logo": "ADUI.jpg"
        },
        {
            "Id": "ASNE",
            "Name": "Lập trình ASP.NET",
            "Logo": "ASNE.png"
        },
        {
            "Id": "CLCO",
            "Name": "Điện toán đám mây",
            "Logo": "CLCO.jpg"
        },
        {
            "Id": "DBAV",
            "Name": "SQL Server",
            "Logo": "DBAV.png"
        },
        {
            "Id": "DBBS",
            "Name": "Cơ sở dữ liệu",
            "Logo": "DBBS.png"
        },
        {
            "Id": "GAME",
            "Name": "Lập trình game 2D",
            "Logo": "GAME.png"
        },
        {
            "Id": "HTCS",
            "Name": "HTML5 và CSS3",
            "Logo": "HTCS.jpg"
        },
        {
            "Id": "INMA",
            "Name": "Internet Marketing",
            "Logo": "INMA.jpg"
        },
        {
            "Id": "JAAV",
            "Name": "Lập trình Java nâng cao",
            "Logo": "JAAV.png"
        },
        {
            "Id": "JABS",
            "Name": "Lập trình hướng đối tượng với Java",
            "Logo": "JABS.png"
        },
        {
            "Id": "JSPR",
            "Name": "Lập trình JavaScript",
            "Logo": "JSPR.png"
        },
        {
            "Id": "LAYO",
            "Name": "Thiết kế layout",
            "Logo": "LAYO.jpg"
        },
        {
            "Id": "MOWE",
            "Name": "Thiết kế web cho điện thoại di động",
            "Logo": "MOWE.png"
        },
        {
            "Id": "PHPP",
            "Name": "Lập trình PHP",
            "Logo": "PHPP.png"
        },
        {
            "Id": "PMAG",
            "Name": "Quản lý dự án với Agile",
            "Logo": "PMAG.jpg"
        },
        {
            "Id": "VBPR",
            "Name": "Lập trình VB.NET",
            "Logo": "VBPR.png"
        },
        {
            "Id": "WEBU",
            "Name": "Xây dựng trang web",
            "Logo": "WEBU.jpg"
        }
    ]
    isshow = true;
    Username;
    anhien = false;
    constructor(private ds: DataService, private router: Router, private db: AngularFireDatabase, private fb: FirebaseServiceService) {

    }
    ngOnInit() {
        this.fb.getStudent().subscribe(data => {
            this.fb.students = data;
            console.log(this.fb.students);
        });
    }
    exit() {
        if (this.ds.checkdangnhap == false) {
            alert('vui long dang nhap!');
            this.router.navigate(['/dangnhap']);

        }
        if (this.ds.checkdangnhap == true) {
            alert('ban da dang xuat!');
            this.router.navigate(['/dangnhap']);
            this.ds.checkdangnhap = false;
            console.log(this.ds.checkdangnhap);
        }
        console.log(this.anhien)
    }
    //dangnhap
    checkdangnhap() {
        if (this.ds.checkdangnhap == false) {
            alert('vui long dang nhap truoc khi thi!')
            this.router.navigate(['/dangnhap'])
        }
    }//check ham sau khi dang nhap
    check() {
        if (this.ds.checkdangnhap == false) {
            alert('vui long dang nhap !')
            this.router.navigate(['/dangnhap'])
        }
    }
    getisShow() {
        if (this.ds.checkdangnhap == true) {
            this.Username = this.ds.username;
            // console.log('asdasd',this.Username)
            return false;
        }
        else {
            return true;
        }

    }

}

