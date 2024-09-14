import {Component, Input} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [
    FormsModule,
    MatStepperNext,
    ReactiveFormsModule,
    MatStepperPrevious
  ],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
  @Input() form!: FormGroup;

  step2Submitted(){
    this.form.get('contactDetails')!.get('email')!.markAsTouched();
    this.form.get('contactDetails')!.get('email')!.updateValueAndValidity();
  }
}
