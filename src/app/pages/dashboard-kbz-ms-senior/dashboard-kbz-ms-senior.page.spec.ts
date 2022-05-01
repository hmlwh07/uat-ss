import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DashboardKbzMsSeniorPage } from './dashboard-kbz-ms-senior.page';



describe('DashboardKbzMsPage', () => {
  let component: DashboardKbzMsSeniorPage;
  let fixture: ComponentFixture<DashboardKbzMsSeniorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardKbzMsSeniorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardKbzMsSeniorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
