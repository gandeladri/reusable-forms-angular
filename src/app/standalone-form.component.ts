import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChildFormComponent } from './child-form.component';

@Component({
  selector: 'standalone-form',
  standalone: true,
  imports: [ReactiveFormsModule, ChildFormComponent],
  templateUrl: './standalone-form.component.html',
})
export class StandaloneFormComponent {
  form = new FormGroup({
    displayName: new FormControl(''),
  });

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
