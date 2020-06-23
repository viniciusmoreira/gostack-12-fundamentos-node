import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Response {
  transactions: Transaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
}

class ListTransactionService {
  transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Response {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();

    return {
      transactions,
      balance,
    };
  }
}

export default ListTransactionService;
