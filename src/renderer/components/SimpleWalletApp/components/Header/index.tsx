import "./index.css";

import axios from "axios";
import React, { useContext, useEffect } from "react";

import { API_BASE_URL } from "../../api/api";
import TransactionDataContext from "../../contexts/TransactionDataContext";
import { Transaction, Wallet } from "../../types";
import BalanceDisplay from "./components/BalanceDisplay";
import Logo from "./components/Logo";
import WalletDropdownMenu from "./components/WalletDropdownMenu";

const walletAddreses = [
	"DR7WwjwGdw6mXoBrispUcTUHVV31AkAfs5",
	"D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
	"DNPBUxxGQUKDPX3XKUXa3pc4GK8yz7L97T",
	"DRgF3PvzeGWndQjET7dZsSmnrc6uAy23ES",
	"DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk",
];

const Header = () => {
	const { setLoading, setWallets } = useContext(TransactionDataContext);

	useEffect(() => {
		const wallets: Array<Wallet> = [];
		setLoading(true);
		Promise.all(
			walletAddreses.map(async (item: string) => {
				const response = (
					await axios.get(
						`${API_BASE_URL}/wallets/${item}/transactions?page=1&limit=15`
					)
				).data;
				const transactions: Array<Transaction> = [];
				response.data.map((item: any) => {
					transactions.push({
						txId: item.id,
						blockId: item.blockId,
						sender: item.sender,
						recipient: item.recipient,
						timestamp: item.timestamp.human
							.split("T")[0]
							.split("-")
							.reverse()
							.join("."),
						amount: parseInt(item.amount),
						fee: parseInt(item.fee),
					});
				});
				const walletInfo = (
					await axios.get(`${API_BASE_URL}/wallets/${item}`)
				).data.data;
				const wallet: Wallet = {
					address: item,
					balance: parseInt(walletInfo.balance),
					transactions: transactions,
				};
				console.log(response);
				wallets.push(wallet);
			})
		).then((res) => {
			setLoading(false);
			setWallets(wallets);
		});
	}, []);

	return (
		<>
			<div className="flex h-408px lg:h-212px bg-header-background pt-40px pb-40px px-31px sm:px-31px lg:px-40px">
				<div className="flex flex-col lg:flex-row h-312px lg:h-full bg-header-main rounded-3xl w-311px sm:w-577px md:w-577px lg:w-689px xl:w-945px xxl:w-1200px xxxl:w-1200px m-auto">
					<Logo className="my-auto ml-40px lg:m-auto " />
					<div className="right-0 top-0 h-2px lg:w-2px lg:h-56px bg-gray-200 mx-40px my-auto lg:m-auto bg-dropdown-background" />
					<WalletDropdownMenu className="mx-40px my-auto lg:m-auto" />
					<div className="hidden lg:block right-0 top-0 w-577px h-2px lg:w-2px lg:h-56px bg-gray-200 m-auto bg-dropdown-background" />
					<BalanceDisplay className="mx-40px my-auto lg:m-auto" />
				</div>
			</div>
		</>
	);
};

export default Header;
