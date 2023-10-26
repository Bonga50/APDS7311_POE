import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrComponent } from './err/err.component';

@Injectable()
export class ErrorhandlerInterceptor implements HttpInterceptor {

  constructor(private dialog:MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "An error occurred";
        if (error.error.message){
          console.log("error")
          errorMessage = error.error.message
          
        }
        const dialogRef = this.dialog.open(ErrComponent, { data: { message: errorMessage } });
          dialogRef.afterClosed().subscribe(() => {
            // Handle the dialog close action if needed
          });
           // Automatically close the dialog after a specified time (e.g., 5 seconds)
        setTimeout(() => {
          dialogRef.close();
        }, 5000);
        
        // this.dialog.open(ErrComponent,{data: {message: errorMessage}})
        return throwError(errorMessage)
  })
  ); 
  }
}
