import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatStep, MatStepLabel, MatStepper} from "@angular/material/stepper";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PersonalDetailsComponent} from "./personal-details/personal-details.component";
import {ContactDetailsComponent} from "./contact-details/contact-details.component";
import {FormReviewComponent} from "./form-review/form-review.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatStep, ReactiveFormsModule, MatStepLabel, PersonalDetailsComponent, ContactDetailsComponent, FormReviewComponent, MatStepper],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular-MaterialStepperIntro';

  registrationForm!: FormGroup;
  // medium link to learn more
  // https://dhrubot.medium.com/angular-material-stepper-with-reactive-forms-fa4fe1f9b7cd

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'mi': new FormControl(null),
        'lastname': new FormControl(null, Validators.required)
      }),
      'contactDetails': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null)
      }),
    })
  }


}
