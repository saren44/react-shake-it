import React from "react";
import styled from "styled-components";
import { Title } from "./Title";

const StyledNavBar = styled.div`
	width: 100vw;
	height: auto;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	.linksContainer {
		width: 70%;
		display: flex;
		height: 100%;
		justify-content: space-evenly;
	}

	a {
		color: black;
		text-decoration: none;
	}

	a:hover {
		cursor: pointer;
		color: black;
	}

	a:visited {
		text-decoration: none;
		color: black;
	}

	.dangerButton {
		cursor: pointer;
		color: red;
	}

	.dangerButton:hover {
		color: red;
	}

	.dangerVisited {
		color: black;
	}

	.dangerVisited:hover {
		cursor: default;
		color: black;
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
				<a href='#docs'> docs </a>
				<a onClick={shakeCallback} className={isShaked ? "dangerVisited" : "dangerButton"} > {isShaked ? 'Are you proud of yourself?' : 'DO NOT CLICK ME'} </a>
			</div>
		</StyledNavBar>
	)
}