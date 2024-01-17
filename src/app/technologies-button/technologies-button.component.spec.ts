import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesButtonComponent } from './technologies-button.component';

describe('TechnologiesButtonComponent', () => {
  let component: TechnologiesButtonComponent;
  let fixture: ComponentFixture<TechnologiesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologiesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
