import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/common';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  Events:any =[{
    title:'My event',
    start: '2021-09-13T10:30:00'
  }];
newEvents:any=[]
  CalendarOptions:CalendarOptions ={
    initialView: 'dayGridMonth',
    editable:true,
    events:[]
  }
  calendarEvents:any = this.Events.concat(this.CalendarOptions.events)

  constructor(private httpClient:HttpClient) { }

  onDateSelect(arg:any){
    alert('Date clicked: ' + arg.dateStr)
  }


  // guess it must be dona with a SERVIVCE
addEvent(name:any,startDate:any, endDate:any):void{
  var newEvent = {
    title: name,
    start:startDate,
      end: endDate} 
    this.newEvents.push(newEvent)
    this.CalendarOptions.events = this.Events.concat(this.newEvents)
    this.calendarEvents = this.CalendarOptions.events
  }

deleteEvents():void{
  this.Events=[]
  this.newEvents=[]
  this.CalendarOptions.events = []
  this.calendarEvents =[]
}
deleteTargetEvent(eventName:string):void{
  this.CalendarOptions.events =this.calendarEvents.filter((x:any)=>x.title !==eventName)
  this.calendarEvents = this.CalendarOptions.events
  this.Events= this.CalendarOptions.events
}

conse(){
  console.log(this.Events)
  console.log(this.CalendarOptions.events)
  console.log(this.newEvents)
  console.log(this.calendarEvents)
}

  ngOnInit(): void {
      setTimeout(() => {
          return this.httpClient.get('http://localhost:8888/dynamic-events.php')
          .subscribe((res: any) => {
              this.Events.push(res);
              console.log(this.Events);
          });
      }, 2500);
      setTimeout(() => {
          this.CalendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.onDateSelect.bind(this),
          events: this.Events
          };
      }, 2500);
  }

}
