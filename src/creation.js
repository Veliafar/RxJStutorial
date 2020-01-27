// import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs';
// import { scan, map } from 'rxjs/operators';


// range( 42, 10 )
//   .subscribe(
//     val => console.log(val)
//   )



// timer(2500)
//   .subscribe(
//     val => console.log(val)
//   );


// const sub = interval(500)
//   .subscribe(
//     val => console.log(val)
//   );

//   setTimeout(() => {
//     sub.unsubscribe();
//   }, 4000);


// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map(event => ({
//       x: event.offsetX,
//       y: event.offsetY,
//       ctx: event.target.getContext('2d')
//     }))
//   )
//   .subscribe(position => {
//     position.ctx.fillRect(position.x, position.y, 2, 2);
//   })

// const clear$ = fromEvent(document.getElementById('clear'), 'click');

// clear$
//   .subscribe(() => {
//     const canvas = document.querySelector('canvas');
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
//   })





// const stream$ = new Observable(observer => {

//   observer.next('First value');

//   setTimeout(() => observer.next('After 1000 ms'), 1000);
//   setTimeout(() => observer.complete('After 1500 ms'), 1500);
//   setTimeout(() => observer.error('Something went wrong after 2000 ms'), 2000);
//   setTimeout(() => observer.next('After 3000 ms'), 3000);

// })

// stream$
//   .subscribe(
//     (val) => console.log('Val:', val),
//     (error) => console.warn('Error:', error),
//     () => console.log('Complete')
//   )

// stream$
//   .subscribe({
//     next(val) {
//       console.log(val);
//     },
//     error(error) {
//       console.log(error)
//     },
//     complete() {
//       console.log('Complete')
//     }
//   })




// const stream$ = of(1,2,3,4);

// stream$
//   .subscribe(val => {
//     console.log('Value', val);
//   })



// const arr$ = from([1, 2, 3, 4])
//   .pipe(
//     scan( (acc, v) => acc.concat(v), [])
//   )

// arr$
//   .subscribe(
//     val => console.log(val)
//   )