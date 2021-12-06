import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  backend = "http://localhost:81";
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    var acc = (document.getElementById("account") as HTMLInputElement)?.value;
    var pass = (document.getElementById("password")  as HTMLInputElement)?.value;
    var ghinho = (document.getElementById("ghinho")  as HTMLInputElement)?.checked;
    console.log(acc+pass);
    fetch(`${this.backend}/api/login`, {
      method : "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({account: acc, pass:pass, ghinho:ghinho})
    }).then(r=>r.json())
    .then(rs=>rs.code == "0").then(p=>{
      location.href = "/user/info";
    });
  }
}