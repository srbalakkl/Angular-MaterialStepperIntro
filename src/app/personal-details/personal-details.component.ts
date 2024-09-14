import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatStepperNext} from "@angular/material/stepper";

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperNext
  ],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent {
  @Input() form!: FormGroup;

  step1Submitted(){
    this.form.get('personalDetails')!.get('firstname')!.markAsTouched();
    this.form.get('personalDetails')!.get('firstname')!.updateValueAndValidity();
    this.form.get('personalDetails')!.get('lastname')!.markAsTouched();
    this.form.get('personalDetails')!.get('lastname')!.updateValueAndValidity();

    console.log(this.form.value);
  }

}
