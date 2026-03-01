// describePerson
function describePerson(name, age) {
    console.log("Name:".concat(name, ", Age:").concat(age !== null && age !== void 0 ? age : "Unknown"));
}
// calculatePrice
var calculatePrice = function (basePrice, discount) {
    if (discount === void 0) { discount = 0.1; }
    return basePrice - basePrice * discount;
};
// test calls
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));
