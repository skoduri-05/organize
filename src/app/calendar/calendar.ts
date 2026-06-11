import { Component } from '@angular/core';
import { MonthView } from './month-view/month-view'
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
  imports: [MonthView]
})
export class Calendar {

}