import { Component } from '@angular/core';

import { NgbDate, NgbDateStruct, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datepicker-issue';

  time = {hour: 13, minute: 30};

  update() {
    console.log(this.time);
  }

  updateNgKeyUp() {
    this.time.minute = 66;
    console.log(this.time);
  }
}
