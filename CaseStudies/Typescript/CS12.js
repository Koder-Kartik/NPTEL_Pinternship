function displayMember(id, name, email) {
    console.log("ID:".concat(id, ", Name:").concat(name));
    if (email)
        console.log("Email:".concat(email));
}
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    return fines.reduce(function (a, b) { return a + b; }, 0);
}
function membershipFee(price, discountRate) {
    if (discountRate === void 0) { discountRate = 0.1; }
    return price - price * discountRate;
}
function greetVisitor(v, f) { f(v); }
var vipGreet = function (n) { return console.log("Welcome VIP ".concat(n, "!")); };
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
function generateReport(data, format) {
    return format === "json"
        ? JSON.stringify(data, null, 2)
        : data.map(String).join("\n");
}
var consoleGreet = function (n) { return console.log("Hello, ".concat(n, "!")); };
// displayMember
displayMember(1, "Alice", "alice@mail.com");
displayMember(2, "Bob");
// calculateFines
console.log(calculateFines(5, 10, 2.5));
// membershipFee
console.log(membershipFee(100), membershipFee(100, 0.2));
// greet visitors
["Alice", "Bob"].forEach(function (v) {
    greetVisitor(v, vipGreet);
    greetVisitor(v, consoleGreet);
});
// factorial
console.log(factorial(5));
// reports
var data = [{ title: "1984" }];
console.log(generateReport(data), generateReport(data, "json"));
