import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {
  rotaBirthday?: string;

  private _API_URL =  "https://apibirthday.onrender.com/user"

  constructor(private http: HttpClient) { 
    this.rotaBirthday = 'birthday'
  }

  getBirthdayList(){
    let list = this.http
      .get(`${this._API_URL}${this.rotaBirthday}`)
      .pipe(tap(console.log));

    return list;
  }
}
