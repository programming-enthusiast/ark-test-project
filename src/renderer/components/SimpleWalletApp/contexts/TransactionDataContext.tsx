import React from "react";

import { TransactionDataContextType } from "../types";

export default React.createContext<TransactionDataContextType>({
	isLoading: false,
	setLoading: () => null,
	wallets: [],
	setWallets: () => null,
	currentWalletIndex: 0,
	setCurrentWalletIndex: () => null,
});
