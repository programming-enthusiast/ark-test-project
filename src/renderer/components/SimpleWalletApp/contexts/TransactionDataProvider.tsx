import React, { useState } from "react";

import { Wallet } from "../types";
import TransactionDataContext from "./TransactionDataContext";

const TransactionDataProvider = ({ children }: any) => {
	const [isLoading, setLoading] = useState(false);
	const [wallets, setWallets] = useState<Array<Wallet>>([]);
	const [currentWalletIndex, setCurrentWalletIndex] = useState(0);

	return (
		<TransactionDataContext.Provider
			value={{
				isLoading,
				setLoading,
				wallets,
				setWallets,
				currentWalletIndex,
				setCurrentWalletIndex,
			}}
		>
			{children}
		</TransactionDataContext.Provider>
	);
};

export default TransactionDataProvider;
