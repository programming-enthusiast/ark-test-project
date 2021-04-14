import "../../../index.css";

import React from "react";

import logoImage from "../../../assets/Illustrations/logo.svg";

interface LogoPropType {
	className: string;
}

const Logo = ({ className }: LogoPropType) => (
	<div className={`${className} flex`}>
		<img className={`w-56px h-56px lg:m-auto`} src={logoImage} />
		<h1 className="logo-font inline m-auto ml-10px block lg:hidden xxl:block">
			ARK Wallet
		</h1>
	</div>
);

export default Logo;
