import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { selectLanguage } from '../app.selectors';
import { Store } from '@ngrx/store';
import { TechnologiesButtonComponent } from '../technologies-button/technologies-button.component';
import { Technology, allTechologies } from '../technologies';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [AsyncPipe, TechnologiesButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true, alias: 'preview-img-src' }) previewImgSrc!: string;
  @Input({ required: true, alias: 'desc-pl' }) descPL!: string;
  @Input({ required: true, alias: 'desc-en' }) descEN!: string;
  @Input({ alias: 'code-url' }) codeUrl?: string;
  @Input({ alias: 'demo-url' }) demoUrl?: string;
  @Input({ required: true, alias: 'technology-names' })
  technologyNames!: string[];

  language$ = this.store.select(selectLanguage);

  technologies!: Technology[];

  ngOnInit() {
    this.technologies = this.getTechnologies(this.technologyNames);
  }

  constructor(private store: Store) {}

  private getTechnologies(names: string[]): Technology[] {
    const correctNames = names.filter((name) => {
      if (allTechologies.map((element) => element.name).includes(name)) {
        return true;
      } else {
        console.error(`${name} not present in saved technologies.`);
        return false;
      }
    });

    return correctNames.map((name) =>
      allTechologies.find((element) => element.name === name)
    ) as Technology[];
  }
}
