import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {HeroesService2} from './heroes-service2';


describe('HeroesService2 Service', () => {

  beforeEachProviders(() => [HeroesService2]);


  it('should ...', inject([HeroesService2], (service:HeroesService2) => {

  }));

});
