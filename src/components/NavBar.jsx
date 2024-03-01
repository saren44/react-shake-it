import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { themeMatcher } from "../utils/themeMatcher";

const StyledNavBar = styled.div`
	width: 95vw;
	height: auto;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-left: 2.5vw;
	min-width: 1100px;

	.linksContainer {
		width: 70%;
		display: flex;
		height: 100%;
		justify-content: space-evenly;
	}


	.dangerButton {
		cursor: pointer;
		color: red;
	}

	.dangerButton:hover {
		color: red;
	}

	.dangerVisited {
		color: ${({ theme }) => theme.text};
	}

	.dangerVisited:hover {
		cursor: default;
		color: ${({ theme }) => theme.text};
	}
`


export const NavBar = ({shakeCallback, isShaked}) => {
	return(
		<StyledNavBar>
			<Title />
			<div className="linksContainer">
				<a href='#playground'> playground </a>
				<a href='#examples'> examples </a>
				<a href='#advanced-examples'> advanced examples </a>
				<a href='#interpolators'> interpolators </a>
				<a onClick={!isShaked ? shakeCallback : () => {}} className={isShaked ? "dangerVisited" : "dangerButton"} > {isShaked ? 'Are you proud of yourself?' : 'DO NOT CLICK ME'} </a>
			</div>
		</StyledNavBar>
	)
}