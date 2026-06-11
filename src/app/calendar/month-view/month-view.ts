import { Component } from '@angular/core';

type CalendarDay = {
  date: Date;
  dateString: string;
  dayOfMonth: number;
  isCurrentMonth: boolean;
  isToday: boolean;
    
}



@Component({
  selector: 'app-month-view',
  imports: [],
  templateUrl: './month-view.html',
  styleUrl: './month-view.css',
})
export class MonthView {

  weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  currDate = new Date();
  currMonth = this.currDate.getMonth();
  currYear = this.currDate.getFullYear();

  displayDate = this.currDate;
  displayMonth = this.currMonth;
  displayYear = this.currYear;

  calendarDays : CalendarDay[] = this.populate(this.currYear, this.currMonth);

  populate(year : number, month : number): CalendarDay[] {
    const firstOfMonth = new Date(year, month, 1);
    const startOffset = firstOfMonth.getDay();

    const startDate = new Date(year, month, 1 - startOffset);

    const days : CalendarDay[] = [];

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      days.push({
        date,
        dateString: date.toISOString().split('T')[0],
        dayOfMonth: date.getDate(),
        isCurrentMonth: date.getMonth() === month,
        isToday: this.isSameDate(date, this.currDate)
      });
    }

    return days;
  }

  isSameDate(a: Date, b: Date): boolean {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  print(): void {
    console.log("TESTING");
  }

  nextMonth(): void {
    //TODO
    console.log("next");
    this.displayDate = new Date(this.displayYear, this.displayMonth + 1, 1);
    this.displayYear = this.displayDate.getFullYear();
    this.displayMonth = this.displayDate.getMonth();
    this.calendarDays = this.populate(this.displayYear, this.displayMonth);
  }
  previousMonth(): void {
    //TODO
    console.log("prev");
    this.displayDate = new Date(this.displayYear, this.displayMonth - 1, 1);
    this.displayYear = this.displayDate.getFullYear();
    this.displayMonth = this.displayDate.getMonth();
    this.calendarDays = this.populate(this.displayYear, this.displayMonth);
  }
}
