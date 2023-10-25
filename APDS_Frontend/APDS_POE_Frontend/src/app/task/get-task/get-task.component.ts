import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs/internal/Subscription';

export interface Post {
  _id:string,postName: string,postDescription:string,__v:string
}

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.css']
})

export class GetTaskComponent implements OnInit {


  private postSubscription!: Subscription;
  /**
   *
   */
  constructor(private taskservice: TaskService) {}

  ngOnInit(): void {
    this.taskservice.getPost_service()
    this.postSubscription = this.taskservice.getUpdateListiner().subscribe(
      (data:{_id:string,postName: string,postDescription:string,__v:string}[]) => {
      this.posts = data;
    })
  }

  posts:Post[] = [];
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
  onDelete(post: any): void {
    // call your service method to delete the post
  }
}
