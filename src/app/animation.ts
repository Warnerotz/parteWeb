import {animate, state, style, transition, trigger } from '@angular/animations';

export const degradado =
  trigger('fadeIn', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('500ms linear'),
      style({
        opacity: 1
      })
    ])
  ]);
