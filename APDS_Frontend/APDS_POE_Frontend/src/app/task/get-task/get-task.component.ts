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
  posts:Post[] = [];
  ngOnInit(): void {
    this.taskservice.getPost_service()
    this.postSubscription = this.taskservice.getUpdateListiner().subscribe(
      (data:{_id:string,postName: string,postDescription:string,__v:string}[]) => {
      this.posts = data;
      console.log(this.posts);
    })
  }


  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
  onDelete(postId: string): void {
    this.taskservice.deletePost_service(postId);
  }
}
