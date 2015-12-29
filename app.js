System.register(['angular2/platform/browser', './app/angular-hero-tutorial'], function(exports_1) {
    var browser_1, angular_hero_tutorial_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (angular_hero_tutorial_1_1) {
                angular_hero_tutorial_1 = angular_hero_tutorial_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(angular_hero_tutorial_1.AngularHeroTutorialApp);
        }
    }
});
//# sourceMappingURL=../../app.js.map