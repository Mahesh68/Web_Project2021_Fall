import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {
  // constructor(//Inject the Third Party Logger)

  logError(error: any) {
    const date = new Date().toISOString();

    if (error instanceof HttpErrorResponse) {
      // Push the errors to Logger
      console.error("There was an HTTP error.", error.message, "Status Code: ", (<HttpErrorResponse>error).status);
    } else if (error instanceof TypeError) {
      // Push the errors to Logger
      console.error('There was a Type error.', error.message);
    } else if (error instanceof Error) {
      // Push the errors to Logger
      console.error('There was a general error.', error.message);
    } else {
      // Push the errors to Logger
      console.error('Nobody threw an error but something happened!', error);
    }
  }
}
