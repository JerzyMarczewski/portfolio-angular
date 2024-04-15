import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { selectLanguage } from '../app.selectors';
import { Store } from '@ngrx/store';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  language$ = this.store.select(selectLanguage);

  constructor(private store: Store) {}
}
