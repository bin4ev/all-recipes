import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent {

  errorMessage: string;

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    this.errorMessage = activatedRoute.snapshot.queryParams.error;
  }

}
