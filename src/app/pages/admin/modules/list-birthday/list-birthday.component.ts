import { Component, OnInit } from '@angular/core';

import { BirthdayService } from '../birthday.service';

@Component({
  selector: 'app-list-birthday',
  templateUrl: './list-birthday.component.html',
  styleUrls: ['./list-birthday.component.css']
})
export class ListBirthdayComponent implements OnInit {
  birthdayList: any;

  constructor(private service: BirthdayService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.service
      .getBirthdayList().subscribe((res)=>{
        this.birthdayList = res
        console.log(res)
      })
  }
  

}
