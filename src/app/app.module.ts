import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { SuadoitaikhoanComponent } from './suadoitaikhoan/suadoitaikhoan.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import { ThitracnghiemComponent } from './thitracnghiem/thitracnghiem.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    GopyComponent,
    HoidapComponent,
    DangkiComponent,
    DangnhapComponent,
    DoimatkhauComponent,
    SuadoitaikhoanComponent,
    DanhmucmonhocComponent,
    ThitracnghiemComponent,
    LienheComponent,
    QuenmatkhauComponent,
    HomeComponent,
  ],
  imports: [
    AngularFireDatabaseModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    CountdownModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'danhmuc', component: TrangchuComponent },
        { path: 'dangki', component: DangkiComponent },
        { path: 'dangnhap', component: DangnhapComponent },
        { path: 'lienhe', component: LienheComponent },
        { path: 'danhmucmonhoc', component: DanhmucmonhocComponent },
        { path: 'doimatkhau', component: DoimatkhauComponent },
        { path: 'quenmatkhau', component: QuenmatkhauComponent },
        { path: 'gioithieu', component: GioithieuComponent },
        { path: 'gopy', component: GopyComponent },
        { path: 'hoidap', component: HoidapComponent },
        { path: 'suadoitaikhoan', component: SuadoitaikhoanComponent },
        { path: 'thitracnghiem/:Name/:Id', component: ThitracnghiemComponent },
        { path: '**', redirectTo: 'home', pathMatch: 'full' },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
