import React from "react";

interface FooterPropType {
	className?: string;
}
const Footer = ({ className }: FooterPropType) => (
	<>
		<div
			className={`${className} text-center w-full py-16px bg-footer-background main-font text-font-color1`}
		>
			2021 @ ARK.io | All rights reserved
		</div>
	</>
);

export default Footer;
