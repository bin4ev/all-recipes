import { Component, OnInit, ErrorHandler } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiseService } from 'src/app/core/services/user-servise.service';
import { ErrorHandlerComponent } from 'src/app/error/error-handler/error-handler.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  submitting = false
  showError: string | null = null


  constructor(private userService: UserServiseService,
    private refDialog: MatDialogRef<ChangePasswordComponent>,
    private errorHandler: ErrorHandler) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    let pass = form.control.get('password')?.value
    let resPass = form.control.get('rePassword')?.value

    if (pass != resPass) {
      form.control.get('rePassword')?.setErrors({ sameValue: true })
      return
    }

    form.control.get('rePassword')?.setErrors(null)
    this.userService.updateUserPassword(pass)
      .then(() => {
        console.log('userPasswordUpdate');

        this.refDialog.close()
      })
      .catch((err) => {
        console.error(err)
        this.errorHandler.handleError(err)
      })

  }

}
