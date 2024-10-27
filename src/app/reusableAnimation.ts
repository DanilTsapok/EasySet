import { animation, style, animate, keyframes } from '@angular/animations';

export const reusableAnimation = animation([
  animate(
    '2s ease-in-out',
    keyframes([
      style({ opacity: 0, transform: 'scale(0.5)', offset: 0 }),
      style({ opacity: 0.5, transform: 'scale(1.1)', offset: 0.5 }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
    ])
  ),
]);
