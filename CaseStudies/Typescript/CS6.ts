function processTransaction(
  amount: number,
  description: string | undefined,
  isCredit: boolean
): void {

  
  if (amount < 0) {
    throw new Error("Amount cannot be negative"); // never
  }

  
  const finalDescription = description ?? "No description provided";


  const type = isCredit ? "CREDIT" : "DEBIT";

  console.log("----- Transaction Summary -----");
  console.log("Type:", type);
  console.log("Amount:", amount);
  console.log("Description:", finalDescription);
}

processTransaction(500, "Salary received", true);
processTransaction(200, undefined, false);
