import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {
  sanitizer: DomSanitizer;
  private htmlSnippet: string;

  constructor(domSanitizer: DomSanitizer) {
    this.sanitizer = domSanitizer;
  }

  transform(value: number): SafeHtml {
    let result: SafeHtml = null;
    switch (value) {
      case 0:
        this.htmlSnippet = ` <ion-text color="warning"></ion-text>`;
        break;
      case 1:
        this.htmlSnippet = ` <ion-text color="warning">⭐</ion-text>`;
        break;
      case 2:
        this.htmlSnippet = ` <ion-text color="warning">⭐⭐</ion-text>`;
        break;
      case 3:
        this.htmlSnippet = ` <ion-text color="warning">⭐⭐⭐</ion-text>`;
        break;
      case 4:
        this.htmlSnippet = ` <ion-text color="warning">⭐⭐⭐⭐</ion-text>`;
        break;
      case 5:
        this.htmlSnippet = ` <ion-text color="warning">⭐⭐⭐⭐⭐</ion-text>`;
        break;
    }

    result = this.sanitizer.bypassSecurityTrustHtml(this.htmlSnippet);
    return result;
  }
}
