import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthCiPrintQuoComponent } from './health-ci-print-quo.component';

describe('HealthCiPrintQuoComponent', () => {
  let component: HealthCiPrintQuoComponent;
  let fixture: ComponentFixture<HealthCiPrintQuoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCiPrintQuoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthCiPrintQuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
