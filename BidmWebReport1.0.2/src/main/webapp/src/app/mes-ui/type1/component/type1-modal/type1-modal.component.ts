import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-type1-modal',
  templateUrl: './type1-modal.component.html',
  styleUrls: ['./type1-modal.component.css']
})
export class Type1ModalComponent implements OnInit, OnChanges {

  @Input() modalVisible: Boolean = false;
  @Input() modalData;

  visible: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    console.log(this.modalVisible);
    console.log('여기거' + this.visible);
    this.visible = this.modalVisible;
  }

  closeModal() {
    console.log(this.modalVisible);
    this.visible = false;
    console.log('마지막' + this.visible);
  }

  test() {
    this.visible = true;
  }
}
