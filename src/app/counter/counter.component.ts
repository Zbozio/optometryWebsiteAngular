import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  countDownDate=new Date("April 19 2024 21:00:00").getTime();

  days:any;
  hours:any;
  minutes:any;
  seconds:any;
  x=setInterval(()=>{
    let now = new Date().getTime();
    let distance = this.countDownDate-now;
    let days=Math.floor(distance/(1000*60*60*24));
    let hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    let seconds=Math.floor((distance%(1000*60))/1000);
    this.days=days;
    this.hours=hours;
    this.minutes=minutes;
    this.seconds=seconds;
  })
}
