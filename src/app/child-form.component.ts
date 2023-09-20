import { Component, inject, Input } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'child-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child-form.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class ChildFormComponent {
  @Input({ required: true }) controlKey = '';
  @Input() label = '';
  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(
      this.controlKey,
      new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl(''),
      })
    );
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
