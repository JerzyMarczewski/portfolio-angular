import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollToSection(sectionId: string, offset = 80): void {
    const element = document.getElementById(sectionId);

    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else {
      throw new Error('No section with given id');
    }
  }
}
