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
		width: 40%;
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
`


export const NavBar = () => {
	return(
		<StyledNavBar>
			<Title />
			<div className="linksContainer">
				<a href='#playground'> playground </a>
				<a href='#examples'> examples </a>
				<a href='#docs'> docs </a>
			</div>
		</StyledNavBar>
	)
}