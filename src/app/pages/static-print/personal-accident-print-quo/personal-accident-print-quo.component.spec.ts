import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalAccidentPrintQuoComponent } from './personal-accident-print-quo.component';

describe('PersonalAccidentPrintQuoComponent', () => {
  let component: PersonalAccidentPrintQuoComponent;
  let fixture: ComponentFixture<PersonalAccidentPrintQuoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAccidentPrintQuoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalAccidentPrintQuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
