import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {AngularHeroTutorialApp} from '../app/angular-hero-tutorial';

beforeEachProviders(() => [AngularHeroTutorialApp]);

describe('App: AngularHeroTutorial', () => {
  it('should have the `defaultMeaning` as 42', inject([AngularHeroTutorialApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([AngularHeroTutorialApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

