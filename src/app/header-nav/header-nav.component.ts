import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationComponent } from "../authentication/authentication.component";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.sass']
})

export class HeaderNavComponent implements OnInit {

  @ViewChild('authentication') authentication: AuthenticationComponent;

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit() { }

  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthentication(mode?: 'login' | 'register') {
    this.authentication.openDialog(mode);
  }
}
