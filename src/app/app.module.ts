import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { XemdanhsachdonviComponent } from './xemdanhsachdonvi/xemdanhsachdonvi.component';
import { ThemdonviComponent } from './themdonvi/themdonvi.component';
import { SuadonviComponent } from './suadonvi/suadonvi.component';
import { XemnhanvienComponent } from './xemnhanvien/xemnhanvien.component';
import { ThemnhanvienComponent } from './themnhanvien/themnhanvien.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserinfoComponent,
    XemdanhsachdonviComponent,
    ThemdonviComponent,
    SuadonviComponent,
    XemnhanvienComponent,
    ThemnhanvienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
