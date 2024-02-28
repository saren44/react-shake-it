import React from "react";
import styled from "styled-components";
import { ShakeIt } from "react-shake-it";
import MultiRangeSlider from 'multi-range-slider-react'
import '../multirangeslider.css'

const StyledPlayground = styled.div`
	width: 100%;
	height: 70vh;
	min-height: 400px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	.configPanel {
		width: 30%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	.displayPanel {
		width: 70%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.animated {
		width: 100px;
		height: 50px;
		background-color: lightyellow;
		border: 1px solid black;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
`

const StyledSliderContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;


	.label {
		line-height: 0;
	}
`


const DualSlider = ({rangeMin, rangeMax, step, callback, label, minStart, maxStart}) => {

	return(
		<StyledSliderContainer>
		<p className="label"> {label} </p>
			<MultiRangeSlider
				min={rangeMin}
				max={rangeMax}
				step={step}
				minValue={minStart}
				maxValue={maxStart}
				canMinMaxValueSame={true}
				ruler={false}
				style={{border: 'none', boxShadow: 'none', borderRadius: 0, width: '90%', paddingTop: 0}}
				label={true}
				subSteps={true}
				onInput={(e) => callback(e)}
				baseClassName="multi-range"
			/>	
		</StyledSliderContainer>

	)
}


export const Playground = () => {	
	const [data, setData] = React.useState({
		h: {low: -2, high: 2},
		v: {low: -2, high: 2},
		s: {low: 0.95, high: 1.0},
		r: {low: -2, high: 2},
		o: {low: 0.95, high: 1.0},
	})

	console.log(data);


	return (
		<StyledPlayground>
			<div className="configPanel">
				<DualSlider 
					rangeMin={-25}
					rangeMax={25}
					step={1}
					label={`Horizontal range: "${data.h.low}px - ${data.h.high}px"`}
					callback={(e) => {
						(data.h.low !== e.minValue || data.h.high !== e.maxValue) && 
						setData({...data, h: {low: e.minValue, high: e.maxValue}});
					}}
					minStart={-2}
					maxStart={2}
				/>
				<DualSlider 
					rangeMin={-25}
					rangeMax={25}
					step={1}
					label={`Vertical range: "${data.v.low}px - ${data.v.high}px"`}
					callback={(e) => {
						(data.v.low !== e.minValue || data.v.high !== e.maxValue) && 
						setData({...data, v: {low: e.minValue, high: e.maxValue}});
					}}
					minStart={-2}
					maxStart={2}
				/>
				<DualSlider 
					rangeMin={-10}
					rangeMax={10}
					step={1}
					label={`Rotation range: "${data.r.low}deg - ${data.r.high}deg"`}
					callback={(e) => {
						(data.r.low !== e.minValue || data.r.high !== e.maxValue) && 
						setData({...data, r: {low: e.minValue, high: e.maxValue}});
					}}
					minStart={-2}
					maxStart={2}
				/>
				<DualSlider 
					rangeMin={-5}
					rangeMax={5}
					step={0.01}
					label={`Scale range: "${data.s.low} - ${data.s.high}"`}
					callback={(e) => {
						(data.s.low !== e.minValue || data.s.high !== e.maxValue) && 
						setData({...data, s: {low: e.minValue, high: e.maxValue}});
					}}
					minStart={0.95}
					maxStart={1.0}
				/>
				<DualSlider 
					rangeMin={0}
					rangeMax={1}
					step={0.01}
					label={`Opacity range: "${data.o.low} - ${data.o.high}"`}
					callback={(e) => {
						(data.o.low !== e.minValue || data.o.high !== e.maxValue) && 
						setData({...data, o: {low: e.minValue, high: e.maxValue}});
					}}
					minStart={0.95}
					maxStart={1.0}
				/>
			</div>
			<div className="displayPanel">
				<ShakeIt
					horizontal={`${data.h.low}px ${data.h.high}px`}
					vertical={`${data.v.low}px ${data.v.high}px`}
					rotation={`${data.r.low}deg ${data.r.high}deg`}
					scale={`${data.s.low} ${data.s.high}`}
					opacity={`${data.o.low} ${data.o.high}`}
					duration={'200ms'}
					direction="alternate"
				>
					<div className="animated">
						<p> (＾-＾) </p>
					</div>

				</ShakeIt>
			</div>
		</StyledPlayground>
	)
}