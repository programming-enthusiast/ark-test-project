import React, { MutableRefObject } from "react";

interface SliderScalePropType {
	ref: MutableRefObject<null>;
	value: number;
	isMouseOver: boolean;
}

const SCALE_HEIGHT = 16;
const SCALE_WIDTH = 8;
const MIN = 0;
const MAX = 5;

const SliderScale = ({ ref, value, isMouseOver }: SliderScalePropType) => (
	<div
		ref={ref}
		className="slider-scale"
		style={{
			position: "absolute",
			top: 0,
			left: `${((value - MIN) / (MAX - MIN)) * 100}%`,
			width: SCALE_WIDTH,
			height: SCALE_HEIGHT,
			borderRadius: 4,
			background: "white",
			borderColor: isMouseOver ? "#FBC457" : "#029383",
		}}
	/>
);

export default SliderScale;
