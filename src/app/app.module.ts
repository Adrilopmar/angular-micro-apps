import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angular2-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrAppComponent } from './qr-app/qr-app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import  dayGridPlugin  from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import {HttpClientModule} from '@angular/common/http'


FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    QrAppComponent,
    NavBarComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
