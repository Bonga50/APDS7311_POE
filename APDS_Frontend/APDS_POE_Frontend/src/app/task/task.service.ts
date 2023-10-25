import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:3000/api';

  private http: HttpClient ;
  private postget: {_id:string,postName: string,postDescription:string,__v:string}[] = [];
  private updatedPostdisplay = new Subject<{_id:string,postName: string,postDescription:string,__v:string}[] >();

  constructor(http: HttpClient) {
    this.http = http;
  }

  createPost_service(post: { postName: string, postDescription: string }): Observable<any> {
    console.log(post);
     this.http.post(this.apiUrl+'/posts', post).subscribe(response => {
      console.log(response);
      return response;
     });
     return "null" as unknown as Observable<any>;
  }

  getPost_service(){
    this.http.get<{message: string, Posts:any}>(this.apiUrl+'/posts').subscribe(response => {
      console.log(response);
      this.postget = response.Posts;
      this.updatedPostdisplay.next([...this.postget])
    });
  }

  deletePost_service(postId: string) {
    this.http.delete(this.apiUrl+'/posts/'+postId).subscribe((result) => {

      const updatedPost = this.postget.filter(post => post._id!== postId)
      this.postget = updatedPost;
      this.updatedPostdisplay.next([...this.postget])
    })
  }

  getUpdateListiner(){
    return this.updatedPostdisplay.asObservable();
  }


}
