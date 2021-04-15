import "./tailwind_styles.css";
import "./style.css";

import React, { useEffect, useRef, useState } from "react";

import SliderScale from "./components/SliderScale";

const SCALE_HEIGHT = 16;
const SCALE_WIDTH = 8;
const min = 0;
const max = 5;
const MARGIN_WIDTH = 50;

export default function InputFee({ width, fieldName, onChange }: any) {
	const [currentValue, setCurrentValue] = useState(3.0);
	const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);
	const sliderBarContainerRef = useRef(null);
	const sliderBarRef = useRef(null);
	const inputRef = useRef(null);
	const scaleRef = useRef(null);

	if (!fieldName) {
		fieldName = "field 1";
	}

	if (!width || width < 100) {
		width = 200;
	}

	let previousInputValue = "";
	let inputKey = "";

	useEffect(() => {
		let isScaleMouseDown = false;

		const onMouseOver = (e: any) => {
			const slider = document.getElementById("slider-slider");
			if (slider && slider.contains(e.target)) setIsMouseOverSlider(true);
			else setIsMouseOverSlider(false);

			if (isScaleMouseDown) {
				const sliderWidth = width - MARGIN_WIDTH;
				const changedValue =
					((e.pageX - sliderBarContainerRef.current.offsetLeft) /
						sliderWidth) *
						(max - min) +
					min;

				setCurrentValue(changedValue);
				inputRef.current.value = changedValue;
			}
		};

		const onMouseDown = (e: any) => {
			if (e.target === scaleRef.current) isScaleMouseDown = true;
		};

		const onMouseUp = (e: any) => {
			if (isScaleMouseDown) {
				const sliderWidth = width - MARGIN_WIDTH;
				const changedValue =
					((e.pageX - sliderBarContainerRef.current.offsetLeft) /
						sliderWidth) *
						(max - min) +
					min;

				setCurrentValue(changedValue);
				inputRef.current.value = changedValue;
				if (onChange) onChange(currentValue * 100000000);
			}

			isScaleMouseDown = false;
		};

		document.addEventListener("mouseover", onMouseOver);
		document.addEventListener("mousedown", onMouseDown);
		document.addEventListener("mouseup", onMouseUp);
		return () => {
			document.removeEventListener("mouseover", onMouseOver);
			document.removeEventListener("mousedown", onMouseDown);
			document.removeEventListener("mouseup", onMouseUp);
		};
	}, []);

	const onSliderClick = (e: any) => {
		if (
			sliderBarContainerRef.current != e.target &&
			sliderBarRef.current != e.target
		)
			return;

		const sliderWidth = width - MARGIN_WIDTH;
		const changedValue =
			((e.pageX - sliderBarContainerRef.current.offsetLeft) /
				sliderWidth) *
				(max - min) +
			min;

		setCurrentValue(changedValue);
		inputRef.current.value = changedValue.toString().slice(0, 10);

		if (onChange) onChange(currentValue * 100000000);
	};

	const onInputChange = (e: any) => {
		if (!inputRef.current) return;

		if (inputKey >= "0" && inputKey <= "9") {
			e.target.value.split(".").map((value: string) => {
				console.log(value);
				if (value.length > 8) {
					inputRef.current.value = previousInputValue;
				}
			});
		} else if (inputKey === ".") {
			if (previousInputValue.indexOf(".") >= 0) {
				inputRef.current.value = previousInputValue;
			}
		} else if (
			inputKey === "Backspace" ||
			inputKey === "Delete" ||
			inputKey === "ArrowRight" ||
			inputKey === "ArrowLeft"
		) {
			console.log(e.target.value);
		} else {
			inputRef.current.value = previousInputValue;
		}

		if (
			parseFloat(e.target.value) > max ||
			parseFloat(e.target.value) < min
		) {
			inputRef.current.value = previousInputValue;
		}

		if (inputRef.current.value) {
			setCurrentValue(parseFloat(inputRef.current.value));
		} else {
			setCurrentValue(0);
		}
	};

	const onInputKeyDown = (e: any) => {
		previousInputValue = e.target.value;
		console.log(e);
		inputKey = e.key;
	};

	return (
		<div style={{ width: `${width}px` }}>
			<div className="slider-field-name">{fieldName}</div>
			<div>
				<input
					type="field"
					ref={inputRef}
					className="slider-input"
					defaultValue={currentValue}
					onChange={onInputChange}
					onKeyDown={onInputKeyDown}
				/>
			</div>
			<div
				ref={sliderBarContainerRef}
				id="slider-slider"
				className="slider-slider"
				style={{ height: SCALE_HEIGHT }}
				onClick={onSliderClick}
			>
				<div
					ref={sliderBarRef}
					className={`relative m-auto slider-background h-2px w-full bg-gray-400`}
					id="slider-back"
				>
					<div
						className={`h-full`}
						style={{
							width: `${
								((currentValue - min) / (max - min)) * 100
							}%`,
							background: isMouseOverSlider
								? "#FBC457"
								: "#029383",
						}}
						id="slider-back-progress"
					/>
				</div>
				<SliderScale
					ref={scaleRef}
					value={currentValue}
					isMouseOver={isMouseOverSlider}
				/>
			</div>
		</div>
	);
}
