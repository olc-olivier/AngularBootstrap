System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by o.chantereau on 01.03.2016.
             */
            Hero = (function () {
                function Hero(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map