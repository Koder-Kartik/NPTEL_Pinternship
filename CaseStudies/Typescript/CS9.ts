type OrderStatus = "pending" | "shipped" | "returned";

type Container<T> = {
  value: T;
  timestamp: Date;
};

type Logger = (message: string) => void;
const consoleLogger: Logger = msg => console.log(`[LOG] ${msg}`);


type CustomerID = string;

type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

type ProcessOrder = (
  orderId: number,
  callback: (status: OrderStatus) => void
) => void;

const processOrder: ProcessOrder = (orderId, callback) => {
  consoleLogger(`Processing order #${orderId}`);
  callback("pending");
};

const customer: Customer = { id: "C123", name: "Alice" };

const customerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date()
};
