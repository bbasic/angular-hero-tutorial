import {Component} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core'


@Component({
  selector: 'angular-hero-tutorial-app',
  providers: [HeroService],
  templateUrl: 'app/angular-hero-tutorial.html',
  directives: [HeroDetailComponent],
  pipes: [],
  styles: [`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `]
})
export class AngularHeroTutorialApp implements OnInit {
  constructor(private _heroService: HeroService) {}
  
  ngOnInit() {
    this.getHeroes()
  }
  
  getHeroes() {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes)
  }
  public title = 'Tour of Heroes'
  public heroes: Hero[]
  public selectedHero: Hero
  onSelect(hero: Hero) {this.selectedHero = hero}
  
  // defaultMeaning: number = 42;
  // 
  // meaningOfLife(meaning) {
  //   return `The meaning of life is ${meaning || this.defaultMeaning}`;
  // }
}
