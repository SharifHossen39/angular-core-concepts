import { AbstractControl, ValidationErrors } from "@angular/forms";
import { delay, Observable, of } from "rxjs";

export class CustomValidators {
    static noWhiteSpace(control: AbstractControl): ValidationErrors | null {
        const value = control.value as string;
        const isWhiteSpace = value.indexOf(' ') >= 0;

        console.log(value, isWhiteSpace)
        return isWhiteSpace ? { whiteSpace: true} : null;
    }

    static usernameExistAsync(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const usernames = ['Sharif', 'Dishan', 'Shohan', 'Navid', 'Ibrahim'];

        const value = control.value as string;
        const isExist = usernames.includes(value);

        return isExist ? of({userExist: true}).pipe(delay(500)) : of(null).pipe(delay(500));
    }
}