import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  post = {
    postName: '',
    postDescription: ''
  };
  /**
   *
   */
  constructor(private taskservice: TaskService) {

  }
  ngOnInit(): void {

  }
  onSubmit(postForm:NgForm): void {
    if(postForm.invalid){
      alert('invalid');
      return;
    }
    this.taskservice.createPost_service(this.post)
    //console.log(postForm.value);
  }

}
