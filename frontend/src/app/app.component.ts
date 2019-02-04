import { Component } from '@angular/core';
import { LoginServiceService } from './service/login-service.service'
import { Location } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  user = null
  constructor(private service: LoginServiceService, private location: Location, private router: Router) {
    this.router.events.subscribe((event) => {
      console.log(event);
      setTimeout(()=>{
        this.check()
      },1)
      
    });
  }


  ngOnInit() {
    this.check()
  }
  check() {
    var user = this.service.checkLogin()
    if (user) this.user = user
    else this.location.go('login')
  }
}
