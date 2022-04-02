export interface Expense {
  expenses: string;
  amount: number;
}
export interface UserInformation {
  income: number;
  expenses: Expense[];
}
