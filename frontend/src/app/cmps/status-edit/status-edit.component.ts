import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.scss']
})
export class StatusEditComponent implements OnInit {
  @Output() send: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  sendStatus(ev){
    // console.log(ev.target[0].value)
    var status = {txt: ev.target[0].value}
    this.send.emit(status);
  }
}
