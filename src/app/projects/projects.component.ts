import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { selectLanguage } from '../app.selectors';
import { Store } from '@ngrx/store';
import { ProjectComponent } from '../project/project.component';
import { allTechologies } from '../technologies';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  language$ = this.store.select(selectLanguage);

  portfolioTechnologies = allTechologies.filter((techology) =>
    [
      'Angular',
      'NgRx',
      'Jasmine',
      'Karma',
      'Sass',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Figma',
    ].includes(techology.name)
  );

  asciiFilterTechnologies = allTechologies.filter((techology) =>
    [
      'React',
      'Redux',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Figma',
    ].includes(techology.name)
  );

  mernRemindersTechnologies = allTechologies.filter((techology) =>
    [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JavaScript',
      'HTML',
      'CSS',
      'Figma',
    ].includes(techology.name)
  );

  viaggioTechnologies = allTechologies.filter((techology) =>
    ['React', 'JavaScript', 'HTML', 'CSS', 'Figma'].includes(techology.name)
  );

  musicStreamerTechnologies = allTechologies.filter((techology) =>
    [
      'React',
      'Redux',
      'Supabase',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
    ].includes(techology.name)
  );

  movieSearcherTechnologies = allTechologies.filter((techology) =>
    ['React', 'Supabase', 'TypeScript', 'JavaScript', 'HTML', 'CSS'].includes(
      techology.name
    )
  );

  constructor(private store: Store) {}
}
