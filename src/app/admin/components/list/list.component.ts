import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  title = 'Listado';
  constructor() {
  console.log('holaaaa');
}
}
