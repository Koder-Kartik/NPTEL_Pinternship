var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (o) { this.observers.push(o); };
    DrinkOrder.prototype.serveDrink = function (drink) {
        console.log("Serving ".concat(drink));
        this.observers.forEach(function (o) { return o.update(drink); });
    };
    return DrinkOrder;
}());
//PromotionSystem
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.update = function (drink) {
        console.log("Promo: Buy another ".concat(drink, " today & get 5% off!"));
    };
    return PromotionSystem;
}());
//test
var order = new DrinkOrder();
order.addObserver(new PromotionSystem());
order.serveDrink("Latte");
