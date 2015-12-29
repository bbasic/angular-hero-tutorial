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
import {HeroesPipe} from './heroes-pipe';


describe('HeroesPipe Pipe', () => {

  beforeEachProviders(() => [HeroesPipe]);


  it('should transform the input', inject([HeroesPipe], (pipe:HeroesPipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
