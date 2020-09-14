import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

posts: any[] = [];

constructor(private postsService: PostsService,
            private router: Router) { }
  
ngOnInit(): void {
    this.postsService.allPosts()
    .subscribe(resp =>{
      this.posts = resp.data;
      
      console.log('this.post :' + this.posts)
    },
    err => console.log(err),
    );

  } 

}
