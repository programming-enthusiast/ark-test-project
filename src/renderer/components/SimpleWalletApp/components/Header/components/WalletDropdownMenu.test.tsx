import React from "react";
import renderer from "react-test-renderer";

import TransactionDataContext from "../../../contexts/TransactionDataContext";
import WalletDropdownMenu from "./WalletDropdownMenu";

describe("WalletDropdownMenu Component", () => {
	let renderedComponent: any;

	const contextValue = {
		isLoading: false,
		currentWalletIndex: 0,
		wallets: [
			{
				address: "DR7WwjwGdw6mXoBrispUcTUHVV31AkAfs5",
				balance: 123456,
				transactions: [
					{
						txId: "efwfefweg",
						sender: "DTiBkzrfMjgS5PKKeZcorBvQ4PvV6me4F5",
						recipient: "DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk",
						timestamp: "22.10.2019",
						amount: 1234567,
						fee: 1234567,
					},
					{
						txId: "efwfefweg",
						sender: "DRgF3PvzeGWndQjET7dZsSmnrc6uAy23ES",
						recipient: "DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk",
						timestamp: "22.10.2019",
						amount: 1234567,
						fee: 1234567,
					},
					{
						txId: "efwfefweg",
						sender: "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
						recipient: "DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk",
						timestamp: "22.10.2019",
						amount: 1234567,
						fee: 1234567,
					},
				],
			},
			{
				address: "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
				balance: 123456,
				transactions: [
					{
						txId: "efwfefweg",
						sender: "DTiBkzrfMjgS5PKKeZcorBvQ4PvV6me4F5",
						recipient: "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
						timestamp: "22.10.2019",
						amount: 1234567,
						fee: 1234567,
					},
				],
			},
			{
				address: "DNPBUxxGQUKDPX3XKUXa3pc4GK8yz7L97T",
				balance: 123456,
				transactions: [
					{
						txId: "efwfefweg",
						sender: "DTiBkzrfMjgS5PKKeZcorBvQ4PvV6me4F5",
						recipient: "DNPBUxxGQUKDPX3XKUXa3pc4GK8yz7L97T",
						timestamp: "22.10.2019",
						amount: 1234567,
						fee: 1234567,
					},
				],
			},
			{
				address: "DRgF3PvzeGWndQjET7dZsSmnrc6uAy23ES",
				balance: 123456,
				transactions: [
					{
						txId: "efwfefweg",
						sender: "DTiBkzrfMjgS5PKKeZcorBvQ4PvV6me4F5",
						recipient: "DRgF3PvzeGWndQjET7dZsSmnrc6uAy23ES",
						timestamp: "22.10.2019",
						amount: 1234567,
						fee: 1234567,
					},
				],
			},
			{
				address: "DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk",
				balance: 123456,
				transactions: [
					{
						txId: "efwfefweg",
						sender: "DTiBkzrfMjgS5PKKeZcorBvQ4PvV6me4F5",
						recipient: "DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk",
						timestamp: "22.10.2019",
						amount: 1234567,
						fee: 1234567,
					},
				],
			},
		],
	};

	beforeAll(() => {
		renderedComponent = renderer.create(
			<TransactionDataContext.Provider value={contextValue}>
				<WalletDropdownMenu className="mx-40px my-auto lg:m-auto" />
			</TransactionDataContext.Provider>
		);
	});

	it("should render correctly", () => {
		expect(renderedComponent.toJSON()).toMatchSnapshot();
	});
});
