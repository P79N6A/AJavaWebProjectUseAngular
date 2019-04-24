import { Injectable } from '@angular/core';

// import * as WebSocket from 'websocket';
import { AppTopBarComponent } from 'core/layout/topbar/app.topbar.component';

@Injectable()
export class WebsocketService {

  socket: WebSocket;

  constructor() { }

  public initBroadcastService(app: AppTopBarComponent) {
    const wsPath = 'ws://' + location.host + '/api/broadcast';
    // console.log(wsPath);
    this.socket = new WebSocket(wsPath);
    this.socket.onmessage = (event) => {
      app.addNotify(JSON.parse(event.data));
    }
  }

}
