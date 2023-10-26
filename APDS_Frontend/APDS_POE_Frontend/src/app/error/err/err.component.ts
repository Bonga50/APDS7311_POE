import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-err',
  templateUrl: './err.component.html',
  styleUrls: ['./err.component.css']
})
export class ErrComponent {
 /**
  *
  */
 constructor(@Inject (MAT_DIALOG_DATA) public data:{message: string}) {
    
 }
}
