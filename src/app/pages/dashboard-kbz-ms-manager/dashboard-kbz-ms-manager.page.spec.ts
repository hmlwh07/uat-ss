import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardKbzMsManagerPage } from './dashboard-kbz-ms-manager.page';

describe('DashboardKbzMsManagerPage', () => {
  let component: DashboardKbzMsManagerPage;
  let fixture: ComponentFixture<DashboardKbzMsManagerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardKbzMsManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardKbzMsManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
