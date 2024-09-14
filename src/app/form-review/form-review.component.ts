import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatStepperPrevious} from "@angular/material/stepper";

@Component({
  selector: 'app-form-review',
  standalone: true,
  imports: [
    NgIf,
    MatStepperPrevious
  ],
  templateUrl: './form-review.component.html',
  styleUrl: './form-review.component.css'
})
export class FormReviewComponent {
  @Input() form!: FormGroup;
  formSubmitted = false;

  submit() {
    console.log('submit');
    console.log(this.form.value);
    this.formSubmitted = true
  }
}
