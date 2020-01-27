import { interval, fromEvent } from 'rxjs';
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from 'rxjs/operators';

fromEvent(document, 'click')
    .pipe(
        switchMap((event) => {
            return interval(1000)
                .pipe(
                    tap(val => console.log('Tap', val)),
                    take(5),
                    reduce((acc, val) => acc + val, 0)
                )
        })
    )
    .subscribe({
        next: val => console.log('Next: ', val),
        complete: () => console.log('Complete')
    })

// const stream$ = interval(1000)
//     .pipe(
//         // tap(val => console.log('Tap', val)),
//         // map((val) => val * 3),
//         // filter(val => val % 2 === 0),
//         // take(5)
//         take(10),
//         // takeLast(5),
//         // takeWhile( val => val < 7),
//         // scan( (acc, val) => acc + val, 0),
//         // reduce( (acc, val) => acc + val, 0)
//     );

// stream$
//     .subscribe({
//         next: val => console.log('Next: ', val),
//         complete: () => console.log('Complete')
//     })