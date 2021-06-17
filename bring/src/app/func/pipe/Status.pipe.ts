import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  sanitizer: DomSanitizer;
  private htmlSnippet: string;

  constructor(domSanitizer: DomSanitizer) {
    this.sanitizer = domSanitizer;
  }

  transform(value: number): SafeHtml {
    let result: SafeHtml = null;
    switch (value) {
      case 0:
        this.htmlSnippet = ` <ion-badge color="info">未揽收</ion-badge>`;
        break;
      case 1:
        this.htmlSnippet = `  <ion-badge color="secondary" slot="end">已揽收</ion-badge>`;
        break;
      case 2:
        this.htmlSnippet = `<ion-badge color="primary" slot="end">运输中</ion-badge>`;
        break;
      case 3:
        this.htmlSnippet = `<ion-badge color="light">已送达</ion-badge>`;
        break;
      case 4:
        this.htmlSnippet = ` <ion-badge color="success">已完成</ion-badge>`;
        break;
      case 5:
        this.htmlSnippet = ` <ion-badge color="danger">已评价</ion-badge>`;
        break;
    }

    result = this.sanitizer.bypassSecurityTrustHtml(this.htmlSnippet);
    return result;
  }
}
