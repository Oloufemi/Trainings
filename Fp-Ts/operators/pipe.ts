import { pipe } from 'fp-ts/function';

export interface User {
  name: string;
  lastName: string;
  age: number;
  orders?: number;
  dish?: number;
  menu?: number;
}

function orderPossible(user: User): User {
  user.orders = user.age > 18 ? 1 : 2;
  return user;
}

function orderAmount(user: User) {
  let amount = 0;
  if (user.dish) {
    amount += user.dish;
  }
  if (user.menu) {
    amount += user.dish;
  }
  return user.orders * amount;
}

const femi: User = {
  name: 'Oloufemi',
  lastName: 'Adeks',
  age: 28,
  dish: 10,
};

const amount = pipe(femi, orderPossible, orderAmount);
console.log(
  `${femi.name} ${femi.lastName} is ${femi.age}. He will pay ${amount} $ for his order.`
);
