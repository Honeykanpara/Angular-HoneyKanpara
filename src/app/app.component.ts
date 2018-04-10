import { Component } from '@angular/core';
import { ConvertNumberFilterPipe } from './convertNumberFilter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public searchText: string = "";
  public outputText: string = "";
  public count: number = 0;
  public amount: number;
  public breakUp: string = "";

  calculate(){
    this.count= 0;
    this.breakUp = "";
    let calculateNumber = this.amount;

    if(Math.trunc(calculateNumber/50) !== 0){
      this.count = this.count + Math.trunc(calculateNumber/50);
      this.breakUp = "50 x " + Math.trunc(calculateNumber/50);
      calculateNumber = calculateNumber%50;
    }
    if(Math.trunc(calculateNumber/10) !== 0){
      this.count = this.count + Math.trunc(calculateNumber/10);
      if(this.breakUp != ""){
        this.breakUp = this.breakUp + ", 10 x " + Math.trunc(calculateNumber/10);
      } else {
        this.breakUp = this.breakUp + "10 x " + Math.trunc(calculateNumber/10);
      }
      calculateNumber = calculateNumber%10;
    }
    if(Math.trunc(calculateNumber/5) !== 0){
      this.count = this.count + Math.trunc(calculateNumber/5);
      if(this.breakUp != ""){
        this.breakUp = this.breakUp + ", 5 x " + Math.trunc(calculateNumber/5);
      } else {
      this.breakUp = this.breakUp + "5 x " + Math.trunc(calculateNumber/5);
      }
      calculateNumber = this.amount%5;
    }
    if(Math.trunc(calculateNumber/2) !== 0){
      this.count = this.count + Math.trunc(calculateNumber/2);
      if(this.breakUp != ""){
        this.breakUp = this.breakUp + ",2 x " + Math.trunc(calculateNumber/2);
      } else {
      this.breakUp = this.breakUp + "2 x " + Math.trunc(calculateNumber/2);
      }
      calculateNumber = calculateNumber%2;
    }
    if(Math.trunc(calculateNumber/1) !== 0){
      this.count = this.count + calculateNumber;
      if(this.breakUp != ""){
        this.breakUp = this.breakUp + ",1 x " + calculateNumber;
      } else {
      this.breakUp = this.breakUp + "1 x " + calculateNumber;
      }
    }
  }

  transform(){
    let f = new ConvertNumberFilterPipe();
    this.outputText= f.transform(this.searchText);
  }
}
