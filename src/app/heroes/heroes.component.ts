import {Component, inject} from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from "../hero.service";
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  private heroService = inject(HeroService);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
