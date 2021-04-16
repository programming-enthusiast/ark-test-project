import React from "react";
import renderer from "react-test-renderer";

import Footer from "./";

describe("Footer Component", () => {
	let renderedComponent: any;

	beforeAll(() => {
		renderedComponent = renderer.create(
			<Footer className="fixed bottom-0 left-0" />
		);
	});

	it("should render correctly", () => {
		expect(renderedComponent.toJSON()).toMatchSnapshot();
	});
});
