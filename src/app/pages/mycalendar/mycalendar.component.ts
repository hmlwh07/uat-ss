import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, } from 'angular-calendar';
import { Subject } from 'rxjs';
import { ActivityManageService } from '../activity-management-list/activity-manage.service';
import { Router } from '@angular/router';

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
  },
  Open: {
    primary: '3dc2ff',
    secondary: '#3dc2ff',
  },
  Face: {
    primary: '#3880ff',
    secondary: '#3880ff',
  },
  Online: {
    primary: '#ffc409',
    secondary: '#ffc409',
  },
  Phone: {
    primary: '#2dd36f',
    secondary: '#2dd36f',
  },
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
  showAll = false;
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
  eventNumber: number = 0
  activityList = []
  EventData = [
    // {
    //   start: (new Date()),
    //   end: (new Date()),
    //   title: 'Testing Events 1',
    //   color: colors.blue,
    //   actions: this.actions,
    // },
    // {
    //   start: subDays(endOfDay(new Date()), 7),
    //   end: subDays(startOfDay(new Date()), 3),
    //   title: 'Testing Events 2',
    //   color: colors.red,
    //   actions: this.actions,
    // },
  ];
  events: CalendarEvent[] = []
  activeDayIsOpen: boolean = false;


  constructor(private modal: NgbModal, private activityService: ActivityManageService, private router: Router) {
  }

  ngOnInit(): void {
   
  }
  ngAfterViewInit() {
    this.getActivity()
  }
  getActivity() {
    let postData = {
      status: "Open"
    }
    this.activityService.getActivityList(postData).subscribe((res: any) => {
      if (res) {
        console.log("RES", res)
        this.activityList = res
        this.EventData = this.activityList.map((data) => {
          let actColor
          if (data.activityType == 'Face to Face') {
            actColor = colors.Face
          }
          else if (data.activityType == 'Online') {
            actColor = colors.Online
          }
          else if (data.activityType == 'Phone Call') {
            actColor = colors.Phone
          }
          return {
            start: new Date(data.planDate),
            end:  new Date(data.planDate),
            title: data.activityTitle + "( " + data.activityType + " )",
            color: actColor,
            meta: data.activityNo,
            actions: this.actions,
          }
        })
        console.log(" this.EventData", this.EventData)
        this.events = this.EventData
        this.eventNumber = this.events.length
        this.refresh.next();
      }
    })
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
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
    this.navigateToDetail('edit', event.meta)
  }

  navigateToDetail(data, id?: string) {
    this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: data, pageId: id } })
  }

  addEvent(i): void {
    // this.eventNumber += 1
    // this.events = [
    //   ...this.events,
    //   {
    //     title: `Testing Events ${this.eventNumber}`,
    //     start: subDays(startOfDay(new Date()), 3),
    //     // end: addDays(new Date(), 1),
    //     color: colors.blue,
    //     actions: this.actions,
    //     activityNo:null,
    //     // draggable: true,
    //     // resizable: {
    //     //   beforeStart: true,
    //     //   afterEnd: true,
    //     // },
    //   },
    // ];
    this.navigateToDetail('create', null)
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

  getColor(event: any) {
    return event.color?.primary
  }
}
