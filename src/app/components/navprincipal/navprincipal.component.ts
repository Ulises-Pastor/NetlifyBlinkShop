import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navprincipal',
  templateUrl: './navprincipal.component.html',
  styleUrls: ['./navprincipal.component.css']
})
export class NavprincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("id")
    localStorage.removeItem("correo")
  }

}
