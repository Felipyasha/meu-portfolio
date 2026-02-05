import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  currentYear: number = new Date().getFullYear();

  socialLinks = {
    github: 'https://github.com/felipyasha',
    linkedin: 'https://linkedin.com/in/felipyasha',
    email: 'mailto:felipe_nascalves@hotmail.com',
  };
}
