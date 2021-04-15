import React from "react";

import InputFee from "./InputFee";

export default { title: "Hello" };

export const InputFeeComponent = () => {
	const onChange = (value: number) => {
		console.log("onChange fired", value);
	};
	return <InputFee width="400" fieldName="Input Fee" onChange={onChange} />;
};
