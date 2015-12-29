import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core'
import {Hero} from './hero'

@Injectable()
export class HeroService {
  getHeroes() {
    // return this.getHeroesSlowly() 
    return Promise.resolve(HEROES)
  }
  
  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
  
}