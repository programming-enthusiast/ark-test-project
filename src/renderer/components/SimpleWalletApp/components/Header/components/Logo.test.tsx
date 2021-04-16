import React from "react";
import renderer from "react-test-renderer";

import Logo from "./Logo";

describe("Logo Component", () => {
	let renderedComponent: any;

	beforeAll(() => {
		renderedComponent = renderer.create(
			<Logo className="my-auto ml-40px lg:m-auto " />
		);
	});

	it("should render correctly", () => {
		expect(renderedComponent.toJSON()).toMatchSnapshot();
	});
});
