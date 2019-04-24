import {CanActivate, CanActivateChild} from "@angular/router";
export class RouterChildGuard implements CanActivateChild {
  canActivateChild() {
      console.log("RouterChildGuard run!!!!!!!!!!!");
      return true;
    }
  }