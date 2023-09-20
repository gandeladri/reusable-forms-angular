import { Component, DestroyRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: `./app.component.html`,
})
export class AppComponent implements OnInit {
  private readonly destroy: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {}
}
