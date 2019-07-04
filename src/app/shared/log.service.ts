import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LogService {
  log(tag: String = "", message: any) {
    console.log(tag, message);
  }
}
