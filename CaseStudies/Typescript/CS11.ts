type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" }
];

const inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2
};

const visitors: string[] = ["Alice", "Bob", "Carol"];

// counter for each transaction type
const txCount: Record<Transaction["type"], number> =
  { checkout: 0, return: 0, cancelled: 0, priority: 0 };

for (const tx of transactions) txCount[tx.type]++;


// while(true) break on priority
let queue = [...transactions];
while (true) {
  const tx = queue.shift();
  if (!tx || tx.type === "priority") break;
}


// dynamic do…while queue
let returnQueue = [...transactions], handledReturns = 0;
do {
  const tx = returnQueue.shift();
  if (!tx) break;
  if (tx.type === "return")
    returnQueue.push({ id: 100 + ++handledReturns, type: "return" });
} while (returnQueue.length && handledReturns < 3);


// reset inventory
for (const k in inventory) inventory[k] = 0;


// visitors reverse
for (let i = visitors.length - 1; i >= 0; i--)
  console.log(visitors[i]);
