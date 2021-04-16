import React from "react";
import renderer from "react-test-renderer";

import Header from "./";

describe("Header Component", () => {
	let renderedComponent: any;

	beforeAll(() => {
		renderedComponent = renderer.create(<Header />);
	});

	it("should render correctly", () => {
		expect(renderedComponent.toJSON()).toMatchSnapshot();
	});
});
