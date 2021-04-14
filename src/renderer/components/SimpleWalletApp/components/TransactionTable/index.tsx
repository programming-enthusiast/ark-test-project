import "./index.css";

import React, { useContext } from "react";

import txIdIcon from "../../assets/Icons/txid.svg";
import TransactionDataContext from "../../contexts/TransactionDataContext";
import { Transaction } from "../../types";
import { commafy } from "../../utils";

interface TransactionTablePropType {
	className?: string;
}

const TransactionTable = ({ className }: TransactionTablePropType) => {
	const { wallets, currentWalletIndex } = useContext(TransactionDataContext);
	const transactions: Array<Transaction> = wallets[currentWalletIndex]
		? wallets[currentWalletIndex].transactions
		: [];
	return (
		<>
			<div className={`${className} flex`}>
				<table className="m-auto hidden lg:block">
					<tr className="table-header-font">
						<th className="text-left py-16px px-20px border-2 border-gray-200">
							txid
						</th>
						<th className="text-left py-16px px-20px border-2 border-gray-200">
							sender
						</th>
						<th className="text-left py-16px px-20px border-2 border-gray-200">
							recipient
						</th>
						<th className="table-cell lg:hidden xxl:table-cell text-center py-16px px-20px border-2 border-gray-200">
							timestamp
						</th>
						<th className="text-right py-16px px-20px border-2 border-gray-200">
							amount
						</th>
						<th className="table-cell lg:hidden xl:table-cell text-right py-16px px-20px border-2 border-gray-200">
							fee
						</th>
					</tr>
					{transactions.map((transaction: Transaction) => (
						<tr
							className="table-black-font border-gray-200 border-b-2"
							key={transaction.txId}
						>
							<td className="relative lg:w-56px xl:w-150px py-16px px-20px overflow-hidden overflow-ellipsis">
								<a
									className="inline lg:hidden xl:inline"
									href="#"
								>
									{transaction.txId.length > 12
										? transaction.txId.slice(0, 6) +
										  "..." +
										  transaction.txId.slice(-5)
										: transaction.txId}
								</a>
								<div className="absolute right-0 top-0 w-2px h-full py-16px ">
									<div className="bg-gray-200 w-full h-full" />
								</div>
								<a href="#">
									<img
										className="hidden lg:inline xl:hidden w-20px h-20px"
										src={txIdIcon}
									/>
								</a>
							</td>
							<td className="relative w-200px py-16px px-20px overflow-hidden overflow-ellipsis">
								{transaction.sender ===
								wallets[currentWalletIndex].address ? (
									transaction.sender.length > 12 ? (
										transaction.sender.slice(0, 6) +
										"..." +
										transaction.sender.slice(-5)
									) : (
										transaction.sender
									)
								) : (
									<a href="#">
										{transaction.sender.length > 12
											? transaction.sender.slice(0, 6) +
											  "..." +
											  transaction.sender.slice(-5)
											: transaction.sender}
									</a>
								)}
								<div className="absolute right-0 top-0 w-2px h-full py-16px ">
									<div className="bg-gray-200 w-full h-full" />
								</div>
							</td>
							<td className="relative w-200px py-16px px-20px overflow-hidden overflow-ellipsis">
								{transaction.recipient ===
								wallets[currentWalletIndex].address ? (
									transaction.recipient.length > 12 ? (
										transaction.recipient.slice(0, 6) +
										"..." +
										transaction.recipient.slice(-5)
									) : (
										transaction.recipient
									)
								) : (
									<a href="#">
										{transaction.recipient.length > 12
											? transaction.recipient.slice(
													0,
													6
											  ) +
											  "..." +
											  transaction.recipient.slice(-5)
											: transaction.recipient}
									</a>
								)}
								<div className="absolute right-0 top-0 w-2px h-full py-16px ">
									<div className="bg-gray-200 w-full h-full" />
								</div>
							</td>
							<td className="relative table-cell lg:hidden xxl:table-cell w-100px py-16px px-20px">
								{transaction.timestamp}
								<div className="absolute right-0 top-0 w-2px h-full py-16px ">
									<div className="bg-gray-200 w-full h-full" />
								</div>
							</td>
							<td className="relative w-250px xl:w-250px xxl:w-350px py-16px px-20px">
								<div className="text-right">
									{commafy(transaction.amount)}
								</div>
								<div className="absolute right-0 top-0 w-2px h-full py-16px ">
									<div className="bg-gray-200 w-full h-full" />
								</div>
							</td>
							<td className="relative table-cell lg:hidden xl:table-cell w-200px py-16px px-20px">
								<div className="text-right">
									{commafy(transaction.fee)}
								</div>
							</td>
						</tr>
					))}
				</table>
				<div className="block lg:hidden w-full h-full table-black-font">
					{transactions.map((transaction: Transaction) => (
						<div
							className="flex flex-col mx-31px"
							key={transaction.txId}
						>
							<div className="my-10px">
								<div className="float-left text-font-color2">
									Txid
								</div>
								<div className="float-right text-font-color1">
									<a href="#">
										{transaction.txId.length > 12
											? transaction.txId.slice(0, 5) +
											  "..." +
											  transaction.txId.slice(-5)
											: transaction.txId}
									</a>
								</div>
							</div>
							<div className="my-10px">
								<div className="float-left text-font-color2">
									Sender
								</div>
								<div className="hidden sm:hidden md:block float-right text-font-color1">
									{transaction.sender ===
									wallets[currentWalletIndex].address ? (
										transaction.sender
									) : (
										<a href="#">{transaction.sender}</a>
									)}
								</div>
								<div className="block sm:block md:hidden float-right text-font-color1">
									{transaction.sender ===
									wallets[currentWalletIndex].address ? (
										transaction.sender.length > 12 ? (
											transaction.sender.slice(0, 5) +
											"..." +
											transaction.sender.slice(-5)
										) : (
											transaction.sender
										)
									) : (
										<a href="#">
											{transaction.sender.length > 12
												? transaction.sender.slice(
														0,
														5
												  ) +
												  "..." +
												  transaction.sender.slice(-5)
												: transaction.sender}
										</a>
									)}
								</div>
							</div>
							<div className="my-10px">
								<div className="float-left text-font-color2">
									Recipient
								</div>
								<div className="hidden sm:hidden md:block float-right text-font-color1">
									{transaction.recipient ===
									wallets[currentWalletIndex].address ? (
										transaction.recipient
									) : (
										<a href="#">{transaction.recipient}</a>
									)}
								</div>
								<div className="block sm:block md:hidden float-right text-font-color1">
									{transaction.recipient ===
									wallets[currentWalletIndex].address ? (
										transaction.recipient.length > 12 ? (
											transaction.recipient.slice(0, 6) +
											"..." +
											transaction.recipient.slice(-5)
										) : (
											transaction.recipient
										)
									) : (
										<a href="#">
											{transaction.recipient.length > 12
												? transaction.recipient.slice(
														0,
														6
												  ) +
												  "..." +
												  transaction.recipient.slice(
														-5
												  )
												: transaction.recipient}
										</a>
									)}
								</div>
							</div>
							<div className="my-16px">
								<div className="float-left text-font-color2">
									Timestamp
								</div>
								<div className="float-right text-font-color1">
									{transaction.timestamp}
								</div>
							</div>
							<div className="my-16px">
								<div className="float-left text-font-color2">
									Amount
								</div>
								<div className="float-right text-font-color1">
									{commafy(transaction.amount)}
								</div>
							</div>
							<div className="my-16px">
								<div className="float-left text-font-color2">
									Fee
								</div>
								<div className="float-right text-font-color1">
									{commafy(transaction.fee)}
								</div>
							</div>
							<div className="w-full h-1px bg-font-color2 my-31px" />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default TransactionTable;
