import { FunctionCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  days:Array<Number>;
  months:Array<string>;
  years:Array<Number>;

  
  constructor() { }

  ngOnInit(): void {
    this.getYearsDate();
    this.getMonthsDate();
    this.getDaysDate();
  }


 getYearsDate = () =>{
    let d = new Date();
    let n = d.getFullYear();
    this.years= [];
    for(let i = n; i >= 1900; i--){
      this.years.push(i);
    }    
  }

  getMonthsDate=()=>{
   return this.months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
  }

  getDaysDate=()=>{
    let totalDays =31;
    this.days=[];
    for(let i = 1; i <= totalDays ; i ++){
      this.days.push(i)
    }

  }

}
