import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, } from 'angular-calendar';
import { Subject } from 'rxjs';
import { ActivityManageService, ActivityService } from '../activity-management-list/activity-manage.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EventListComponent } from './event-list/event-list.component';
import { LoadingService } from 'src/app/modules/loading-toast/loading/loading.service';
import { LanguagesService } from 'src/app/modules/languages/languages.service';

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
    primary: '#00acea',
    secondary: '#00acea',
  },
  Online: {
    primary: '#fe8100',
    secondary: '#fe8100',
  },
  Phone: {
    primary: '#015eab',
    secondary: '#015eab',
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
  language:any='EN'

  constructor(private lang:LanguagesService,private cdf:ChangeDetectorRef, private loadingService:LoadingService,  private modal: NgbModal, private activityService: ActivityService, private router: Router,private modalCrl:NgbModal) {
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
    this.activityService.getActivity(postData).subscribe((res: any) => {
      if (res) {
        this.loadingService.activate()
        // console.log("RES", res)
        this.activityList = res
        this.EventData = this.activityList.map((data) => {
          let actColor
          let icon
          let border
          if (data.activityType == 'Face to Face') {
            actColor = colors.Face
            icon="./assets/images/group_chat_color-01.svg"
          
          }
          else if (data.activityType == 'Online') {
            actColor = colors.Online
            icon="./assets/images/world_color-01.svg"
          
          }
          else if (data.activityType == 'Phone Call') {
            actColor = colors.Phone
            icon="./assets/images/phone_color-01.svg"
       
          }
          return {
            start: new Date(data.planDate),
            end:  new Date(data.planDate),
            // title: data.activityTitle + "( " + data.activityType + " )",
            title: data.activityTitle,
            type:data.activityType ,
            color: actColor,
            icon:icon,
            meta: data.activityNo,
            actions: this.actions,
          }
        })
        // console.log(" this.EventData", this.EventData)
        this.EventData.sort((a, b) => (a.type > b.type) ? 1 : -1)
        this.events = this.EventData
        this.eventNumber = this.events.length
        this.refresh.next();
        this.loadingService.deactivate()
      }
    })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === false) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = false;
      }
      this.viewDate = date;
    }
    const modalRef = this.modalCrl.open(EventListComponent, { size: 'sm', backdrop: true ,centered:true,scrollable:true  });
    modalRef.componentInstance.isModal = true
    modalRef.componentInstance.data = events
    modalRef.componentInstance.day = date
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        
      }
    })
    // console.log("day",date,"events",events);
    
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
