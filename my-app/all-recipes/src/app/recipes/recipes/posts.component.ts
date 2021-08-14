import { Component, ErrorHandler, PipeTransform, } from '@angular/core';
import { ContentService } from 'src/app/core/services/content.service';
import { iPosts } from 'src/app/share/interface/posts';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: iPosts[] | undefined;

  icons = {
    faSearchIcon: faSearch,

  }


  isFilter: boolean = false;
  

  constructor(private contentService: ContentService,

    private errorHandler: ErrorHandler) {
    this.fetchPosts();
  }


  fetchPosts(): void {
    const allPost = this.contentService.loadPosts().valueChanges({ idField: 'id' });

    allPost.subscribe(post => this.posts = post,
      error => this.errorHandler.handleError(error))
  }

  getFilter(search:string) {
    if(search!==''){
      this.isFilter=true;
    }
    
  }

}
