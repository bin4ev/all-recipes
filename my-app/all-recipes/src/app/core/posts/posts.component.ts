import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { iPosts } from 'src/app/share/interface/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts: iPosts[] | undefined;

  constructor(private contentService:ContentService) {
this.fetchPosts();
   }

   fetchPosts():void{
    const allPost= this.contentService.loadPosts().valueChanges();
    allPost.subscribe(post=>this.posts=post)
   }

  ngOnInit(): void {
  }

}
