import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardKbzMsLpPage } from './dashboard-kbz-ms-lp.page';

describe('DashboardKbzMsLpPage', () => {
  let component: DashboardKbzMsLpPage;
  let fixture: ComponentFixture<DashboardKbzMsLpPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardKbzMsLpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardKbzMsLpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
