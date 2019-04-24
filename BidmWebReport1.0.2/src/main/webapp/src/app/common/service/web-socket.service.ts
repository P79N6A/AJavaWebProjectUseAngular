import { Injectable } from '@angular/core';
// import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';
import * as Websocket from 'websocket';

@Injectable()
export class WebSocketService {

  constructor() { }

  WebSocketConnection() {
   const websocket = new WebSocket('ws://localhost:8080/api/websocket');
   return websocket;
    // const url = 'http://localhost:8080/api/websocket';
    // const socket = new SockJS(url);
    // const stompClient = Stomp.over(socket);

    // return stompClient;
  }

}
