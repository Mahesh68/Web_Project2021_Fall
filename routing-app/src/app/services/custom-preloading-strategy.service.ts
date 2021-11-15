import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      var delay: number = route.data['delay'];
      console.log("Custom Preload called on " + route.path + " with delay as " + delay);
      return timer(delay).pipe(
        mergeMap(_ => {
          console.log("Loading Start " + route.path);
          return fn();
        })
      )
    } else {
      console.log("No Preload for the path " + route.path);
      return of(null);
    }
  }
}
