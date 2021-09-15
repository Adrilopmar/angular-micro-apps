import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrAppComponent } from './qr-app/qr-app.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path:'QrCode', component:QrAppComponent},
  {path:'Calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
