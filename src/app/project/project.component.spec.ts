import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let store: MockStore;
  let fixture: ComponentFixture<ProjectComponent>;
  const initialState = {
    language: 'en',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectComponent],
      providers: [provideMockStore({ initialState }), provideAnimations()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ProjectComponent);
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
    component.isHovered = true;
    component.handleMouseLeave();
    expect(component.isHovered).toBe(false);
  });
});
