import {Component, inject} from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from "../hero.service";
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {MessageService} from "../message.service";
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, HeroDetailComponent, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  private heroService = inject(HeroService);
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
