import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationComponent } from "../authentication/authentication.component";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.sass']
})
export class HeaderNavComponent implements OnInit {

  @ViewChild('authentication') authentication: AuthenticationComponent;

  constructor(public tokenAuthService:Angular2TokenService) { }

  ngOnInit() {
  }

  presentAuthentication(mode?: 'login' | 'register') {
    this.authentication.openDialog(mode);
  }
}
