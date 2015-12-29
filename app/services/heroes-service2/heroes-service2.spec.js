System.register(['angular2/testing', './heroes-service2'], function(exports_1) {
    var testing_1, heroes_service2_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (heroes_service2_1_1) {
                heroes_service2_1 = heroes_service2_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroesService2 Service', function () {
                testing_1.beforeEachProviders(function () { return [heroes_service2_1.HeroesService2]; });
                testing_1.it('should ...', testing_1.inject([heroes_service2_1.HeroesService2], function (service) {
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/services/heroes-service2/heroes-service2.spec.js.map