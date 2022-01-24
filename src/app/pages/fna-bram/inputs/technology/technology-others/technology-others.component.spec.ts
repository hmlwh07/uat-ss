import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyOthersComponent } from './technology-others.component';

describe('TechnologyOthersComponent', () => {
  let component: TechnologyOthersComponent;
  let fixture: ComponentFixture<TechnologyOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
