import { Injectable } from '@angular/core';

import * as screenfull from 'screenfull';

@Injectable()
export class FullscreenService {

  isFull: boolean = false;

  constructor() { }

  getFullStatus() {
    return screenfull.isFullscreen;
  }

  onContentFullScreen() {
    let contents = document.getElementsByClassName("layout-content");
    let content = contents[0];
    if (screenfull.enabled) {
      this.isFull = true;
      screenfull.request(content);
    }
  }

}
