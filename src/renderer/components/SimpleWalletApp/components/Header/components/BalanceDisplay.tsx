import "../index.css";

import React, { useContext } from "react";

import BalanceIcon from "../../../assets/Icons/balance.svg";
import TransactionDataContext from "../../../contexts/TransactionDataContext";
import { commafy } from "../../../utils";

interface BalanceDisplayPropType {
	className: string;
}

const BalanceDisplay = ({ className }: BalanceDisplayPropType) => {
	const { wallets, currentWalletIndex } = useContext(TransactionDataContext);
	const balance = wallets[currentWalletIndex]
		? wallets[currentWalletIndex].balance
		: null;
	return (
		<div className={`${className} flex`}>
			<div className="flex rounded-full border-dropdown-background border-2 w-57px h-57px">
				<img className="w-2/4 h-2/4 m-auto" src={BalanceIcon} />
			</div>

			<div className="flex flex-col justify-center ml-10px">
				<div className="text-font-color2">Balance</div>
				<div className="text-font-color2">
					{balance ? commafy(balance) : null} DARK
				</div>
			</div>
		</div>
	);
};

export default BalanceDisplay;
