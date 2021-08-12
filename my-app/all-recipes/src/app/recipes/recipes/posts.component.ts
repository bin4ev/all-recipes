import { Component, ErrorHandler, } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { iPosts } from 'src/app/share/interface/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: iPosts[] | undefined;

  constructor(private contentService: ContentService,
    private errorHandler: ErrorHandler) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    const allPost = this.contentService.loadPosts().valueChanges({ idField: 'id' });

    allPost.subscribe(post => this.posts = post,
      error => this.errorHandler.handleError(error))
  }


}
