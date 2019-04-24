import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boe-button',
  templateUrl: './boe-button.component.html',
  styleUrls: ['./boe-button.component.css']
})
export class BoeButtonComponent implements OnInit {

  private bksrc: string = "url('assets/boe/images/bt_normal.png')";
  private width: string = "120px";
  private height: string = "32px";

  constructor() { }

  ngOnInit() {
  }

  mouseover() {
    this.bksrc = "url('assets/boe/images/bt_over.png')";
  }

  mouseout() {
    this.bksrc = "url('assets/boe/images/bt_normal.png')";
  }

  mousedown() {
    this.bksrc = "url('assets/boe/images/bt_down.png')";
  }

  mouseup() {
    this.bksrc = "url('assets/boe/images/bt_over.png')";
  }

  click() {
    alert("button click");
  }

}
