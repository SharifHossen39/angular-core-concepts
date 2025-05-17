import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
  regForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.regForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10), CustomValidators.noWhiteSpace]),
                 CustomValidators.usernameExistAsync],
      email: [''],
      password: [''],
    })
  }

  signUp() {
    console.log("Form", this.regForm?.value);
  }
}
