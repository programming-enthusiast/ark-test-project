import React from "react";
import renderer from "react-test-renderer";

import SimpleWalletApp from "./";

describe("SimpleWalletApp Component", () => {
	let renderedComponent: any;

	beforeAll(() => {
		renderedComponent = renderer.create(<SimpleWalletApp />);
	});

	it("should render correctly", () => {
		expect(renderedComponent.toJSON()).toMatchSnapshot();
	});
});
