import { Component, ErrorHandler, Input, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { UserServiseService } from 'src/app/core/services/user-servise.service';
import { iPosts, IUser } from 'src/app/share/interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() post: iPosts | undefined;

  currUser: IUser | undefined | null = undefined

  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private userService: UserServiseService,
    private router: Router,
    private errorHandler: ErrorHandler) {
  }

  ngOnInit() {
    this.currUser = this.userService.user
  }

  deleteRecipe(): void {
    const id = this.post?.id
    this.contentService.deleteCurentRecipe(id!)
    .then(
      res => {
        this.router.navigate(['my-recipes'])
        console.log('Document as deleted !');
      }
    ).catch(error => this.errorHandler.handleError(error))
  }

}