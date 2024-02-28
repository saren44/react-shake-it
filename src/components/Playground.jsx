import React from "react";
import styled from "styled-components";
import { ShakeIt } from "react-shake-it";

const StyledPlayground = styled.div`
	width: 100%;
	height: 70vh;
	min-height: 250px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	.configPanel {
		width: 30%;
		height: 100%;
		background-color: green;
	}

	.displayPanel {
		width: 70%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.animated {
		width: 50px;
		height: 10px;
		background-color: red;
	}
`


export const Playground = () => {	
	return (
		<StyledPlayground>
			<div className="configPanel">

			</div>
			<div className="displayPanel">

			</div>
		</StyledPlayground>
	)
}