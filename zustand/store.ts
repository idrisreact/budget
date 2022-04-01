import create from 'zustand';

interface TodoState {
  income: number;
  setIncome?: (amount: number) => void;
}

export const useStore = create<TodoState>((set) => ({
  // initial state
  income: 2600,
  setIncome: (amount: number) => {
    set((state) => ({
      ...state,
      income: amount,
    }));
  },
}));
