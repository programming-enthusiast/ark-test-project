import "./index.css";

import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TransactionTable from "./components/TransactionTable";
import TransactionDataProvider from "./contexts/TransactionDataProvider";

const SimpleWalletApp = () => (
	<TransactionDataProvider>
		<Header />
		<div className="pt-48px pb-48px">
			<TransactionTable className="w-full" />
		</div>
		<Footer className="" />
	</TransactionDataProvider>
);

export default SimpleWalletApp;
