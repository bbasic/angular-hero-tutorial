System.register(['angular2/testing', './heroes-component2'], function(exports_1) {
    var testing_1, heroes_component2_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (heroes_component2_1_1) {
                heroes_component2_1 = heroes_component2_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroesComponent2 Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(heroes_component2_1.HeroesComponent2).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/heroes-component2/heroes-component2.spec.js.map