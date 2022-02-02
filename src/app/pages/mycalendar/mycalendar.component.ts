import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
  orange: {
    primary: '#ff8100',
    secondary: '#ff8100',
  }
};


@Component({
  selector: 'app-mycalendar',
  templateUrl: './mycalendar.component.html',
  styleUrls: ['./mycalendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
})
export class MycalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;

  calendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    // {
    //   label: '<i class="fas fa-fw fa-trash-alt"></i>',
    //   a11yLabel: 'Delete',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     // this.events = this.events.filter((iEvent) => iEvent !== event);
    //     this.handleEvent('Deleted', event);
    //   },
    // },
  ];

  refresh = new Subject<void>();
  EventData = [

    {
      start: (new Date()),
      end: (new Date()),
      title: 'Testing',
      color: colors.blue,
      actions: this.actions,
    },
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'Test Event1 ',
    //   color: colors.blue,
    //   // actions: this.actions,
    //   // allDay: true,
    //   // resizable: {
    //   //   beforeStart: true,
    //   //   afterEnd: true,
    //   // },
    //   // draggable: true,
    // },
    // {
    //   start: startOfDay(new Date()),
    //   end: addDays(new Date(), 1),
    //   title: 'Test Event 2 ',
    //   color: colors.yellow,
    //   // actions: this.actions,
    // },
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(startOfDay(new Date()), 1),
    //   title: 'Test Event 3 ',
    //   color: colors.orange,
    //   // allDay: true,
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 1),
    //   end: addHours(new Date(), 1),
    //   title: 'Test Event 4',
    //   color: colors.red,
    //   // actions: this.actions,
    //   // resizable: {
    //   //   beforeStart: true,
    //   //   afterEnd: true,
    //   // },
    //   // draggable: true,
    // },
  ];
  events: CalendarEvent[] = []
  activeDayIsOpen: boolean = true;



  constructor(private modal: NgbModal) {


  }

  ngOnInit(): void {
    this.events = this.EventData
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'Testing',
        start: new Date(),
        end: new Date(),
        color: colors.blue,
        actions: this.actions,
        // draggable: true,
        // resizable: {
        //   beforeStart: true,
        //   afterEnd: true,
        // },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
