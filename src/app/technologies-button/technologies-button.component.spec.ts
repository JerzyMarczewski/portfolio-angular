import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TechnologiesButtonComponent } from './technologies-button.component';

describe('TechnologiesButtonComponent', () => {
  let component: TechnologiesButtonComponent;
  let fixture: ComponentFixture<TechnologiesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesButtonComponent],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologiesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle mouse over', () => {
    component.handleMouseOver();
    expect(component.isHovered).toBe(true);
  });

  it('should handle mouse leave', () => {
    component.handleMouseLeave();
    expect(component.isHovered).toBe(false);
  });
});
