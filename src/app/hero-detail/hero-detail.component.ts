import {Component, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpperCasePipe} from "@angular/common";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    FormsModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
