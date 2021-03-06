System.register(['angular2/testing', '../app/angular-hero-tutorial'], function(exports_1) {
    var testing_1, angular_hero_tutorial_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (angular_hero_tutorial_1_1) {
                angular_hero_tutorial_1 = angular_hero_tutorial_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [angular_hero_tutorial_1.AngularHeroTutorialApp]; });
            testing_1.describe('App: AngularHeroTutorial', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([angular_hero_tutorial_1.AngularHeroTutorialApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([angular_hero_tutorial_1.AngularHeroTutorialApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/angular-hero-tutorial.spec.js.map