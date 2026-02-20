function processTransaction(amount, description, isCredit) {
    if (amount < 0) {
        throw new Error("Amount cannot be negative"); // never
    }
    var finalDescription = description !== null && description !== void 0 ? description : "No description provided";
    var type = isCredit ? "CREDIT" : "DEBIT";
    console.log("----- Transaction Summary -----");
    console.log("Type:", type);
    console.log("Amount:", amount);
    console.log("Description:", finalDescription);
}
processTransaction(500, "Salary received", true);
processTransaction(200, undefined, false);
