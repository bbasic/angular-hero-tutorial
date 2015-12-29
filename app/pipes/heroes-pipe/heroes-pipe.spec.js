System.register(['angular2/testing', './heroes-pipe'], function(exports_1) {
    var testing_1, heroes_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (heroes_pipe_1_1) {
                heroes_pipe_1 = heroes_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroesPipe Pipe', function () {
                testing_1.beforeEachProviders(function () { return [heroes_pipe_1.HeroesPipe]; });
                testing_1.it('should transform the input', testing_1.inject([heroes_pipe_1.HeroesPipe], function (pipe) {
                    testing_1.expect(pipe.transform(true)).toBe(null);
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/pipes/heroes-pipe/heroes-pipe.spec.js.map