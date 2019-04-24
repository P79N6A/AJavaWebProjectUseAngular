import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  socket: WebSocket;

  outColor: string = "lime";
  inColor: string = "transparent";

  constructor() { }

  ngOnInit() {
    // const wsPath = 'ws://' + location.host + '/api/broadcast';
    const wsPath = 'ws://' + "localhost:8080" + '/api/device';
    // console.log(wsPath);
    this.socket = new WebSocket(wsPath);
    this.socket.onmessage = (event) => {
      // app.addNotify(JSON.parse(event.data));
      console.log(event.data);
      let result = JSON.parse(event.data);
      console.log(result);
      this.inColor = result.in;
      this.outColor = result.out;
    }
  }

  click() {
    // console.log("lkkk");
    this.outColor = "lightblue";
    this.inColor = "pink";
  }

}
