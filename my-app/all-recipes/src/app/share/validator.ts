import { AbstractControl } from "@angular/forms";
import { Subscription, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";

export function sameValueFactory(getTargetControl: () => AbstractControl | null, killSubscriptions: Observable<any>) {
  let subscription: Subscription | null = null;
  return function (control: AbstractControl) {
    if (subscription) {
      subscription.unsubscribe()
      subscription = null
    }
    
    const targetControl = getTargetControl();
    if (!targetControl) {
      return null;
    }

    subscription = targetControl.valueChanges
      .pipe(
        takeUntil(killSubscriptions)
      )
      .subscribe({
        next: () => { control.updateValueAndValidity(); },
        complete: () => { subscription = null; }
      });

    return targetControl?.value === control?.value ? null : { sameValue: true }
  }
};