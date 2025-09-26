import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../service/auth';
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public authservice:Auth,private router:Router){}

  logout(){
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

}
