import React from "react";
import renderer from "react-test-renderer";

import SkeletonTable from "./SkeletonTable";

describe("SkeletonTable Component", () => {
	let renderedComponent: any;

	beforeAll(() => {
		renderedComponent = renderer.create(<SkeletonTable />);
	});

	it("should render correctly", () => {
		expect(renderedComponent.toJSON()).toMatchSnapshot();
	});
});
