import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {

  @Input() allStatus
  constructor() { }

  ngOnInit() {
  }

}
