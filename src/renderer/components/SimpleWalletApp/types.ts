export interface Transaction {
	txId: string;
	blockId: string;
	sender: string;
	recipient: string;
	timestamp: string;
	amount: number;
	fee: number;
}

export interface Wallet {
	address: string;
	balance: number;
	transactions: Array<Transaction>;
}

export interface TransactionDataContextType {
	isLoading: boolean;
	setLoading: (loading: boolean) => void;
	wallets: Array<Wallet>;
	setWallets: (wallets: Array<Wallet>) => void;
	currentWalletIndex: number;
	setCurrentWalletIndex: (index: number) => void;
}
