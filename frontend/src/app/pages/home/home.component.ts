import { Component, OnInit } from '@angular/core';
import { StatusServiceService } from '../../service/status-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: StatusServiceService) { }
  allStatus = []
  ngOnInit() {
    this.getStatus()
  }
  getStatus() {
    this.service.getStatus()
      .then(res => {
        this.allStatus = res
      })
  }
  onSend(status) {
    this.service.addStatus(status)
      .subscribe(res => {
        this.allStatus.unshift(res)
      });
  }
}
