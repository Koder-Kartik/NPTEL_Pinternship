var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" }
];
var inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2
};
var visitors = ["Alice", "Bob", "Carol"];
// counter for each transaction type
var txCount = { checkout: 0, return: 0, cancelled: 0, priority: 0 };
for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
    var tx = transactions_1[_i];
    txCount[tx.type]++;
}
// while(true) break on priority
var queue = __spreadArray([], transactions, true);
while (true) {
    var tx = queue.shift();
    if (!tx || tx.type === "priority")
        break;
}
// dynamic do…while queue
var returnQueue = __spreadArray([], transactions, true), handledReturns = 0;
do {
    var tx = returnQueue.shift();
    if (!tx)
        break;
    if (tx.type === "return")
        returnQueue.push({ id: 100 + ++handledReturns, type: "return" });
} while (returnQueue.length && handledReturns < 3);
// reset inventory
for (var k in inventory)
    inventory[k] = 0;
// visitors reverse
for (var i = visitors.length - 1; i >= 0; i--)
    console.log(visitors[i]);
