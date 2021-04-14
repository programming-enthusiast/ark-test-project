import React, { useState } from "react";

import { Wallet } from "../types";
import TransactionDataContext from "./TransactionDataContext";

const TransactionDataProvider = ({ children }: any) => {
	const [wallets, setWallets] = useState<Array<Wallet>>([]);
	const [currentWalletIndex, setCurrentWalletIndex] = useState(0);

	return (
		<TransactionDataContext.Provider
			value={{
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
