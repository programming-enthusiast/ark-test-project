import React, { useContext, useEffect, useState } from "react";

import WalletIcon from "../../../assets/Icons/address.svg";
import WalletIconHover from "../../../assets/Icons/address-hover.svg";
import TransactionDataContext from "../../../contexts/TransactionDataContext";

interface WalletDropdownMenuPropType {
	className: string;
}

const WalletDropdownMenu = ({ className }: WalletDropdownMenuPropType) => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const { wallets, currentWalletIndex, setCurrentWalletIndex } = useContext(
		TransactionDataContext
	);
	const [isOver, setIsOver] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			const dropdownMenu = document.getElementById(
				"wallet-dropdown-menu"
			);
			if (dropdownMenu && !dropdownMenu.contains(event.target)) {
				setMenuOpen(false);
			}
		};

		const handleMouseOver = (event: any) => {
			const dropdownMenu = document.getElementById(
				"dropdown-menu-wrapper"
			);
			if (dropdownMenu && dropdownMenu.contains(event.target)) {
				setIsOver(true);
			} else {
				setIsOver(false);
			}
		};

		// Bind the event listener
		document.addEventListener("mouseup", handleClickOutside);
		document.addEventListener("mouseover", handleMouseOver);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mouseup", handleClickOutside);
			document.removeEventListener("mouseover", handleMouseOver);
		};
	}, []);

	const clickDropdownMenu = () => {
		console.log("clicked");
		setMenuOpen(!isMenuOpen);
	};

	const clickMenuItem = (index: number) => {
		console.log(index);
		setMenuOpen(false);
		setCurrentWalletIndex(index);
	};

	return (
		<div className={`${className} flex`} id="wallet-dropdown-menu">
			<div
				className="hidden sm:flex w-51px h-57px rounded-l-full"
				id="wallet-icon"
				style={{ background: isOver ? "#029383" : "#2F3333" }}
			>
				<img
					className={`${isOver ? "hidden" : ""} m-auto w-1/3 h-1/3`}
					src={WalletIcon}
				/>
				<img
					className={`${isOver ? "" : "hidden"} m-auto w-1/3 h-1/3`}
					src={WalletIconHover}
				/>
			</div>

			<div
				className="custom-select-wrapper w-247px md:w-461px lg:w-557px xl:w-302px xxl:w-404px"
				id="dropdown-menu-wrapper"
			>
				<div
					className={`custom-select w-full lg:w-557px xl:w-302px xxl:w-404px ${
						isMenuOpen ? "open" : ""
					}`}
				>
					<div
						className="custom-select__trigger"
						onClick={clickDropdownMenu}
					>
						<span className="overflow-hidden overflow-ellipsis">
							{wallets.length > 0 &&
								wallets[currentWalletIndex].address}
						</span>
						<div className="arrow" />
					</div>
					<div className="custom-options">
						{wallets.length > 0 &&
							wallets.map((wallet, index) => (
								<span
									className={
										"custom-option overflow-hidden overflow-ellipsis" +
										(index === currentWalletIndex
											? " selected"
											: "")
									}
									data-value={wallet.address}
									key={wallet.address}
									onClick={() => clickMenuItem(index)}
								>
									{wallet.address}
								</span>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WalletDropdownMenu;
