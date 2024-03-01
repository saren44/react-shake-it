import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
	width: 80vw;
	margin-left: 10vw;
	margin-top: 0;
	margin-bottom: 100px;
	min-width: 1000px;

	.title{
		font-size: 44px;
		font-weight: 400;
		margin: 0;
	}

	.description {
		margin-left: 10px;
		font-size: 20px;
		margin-top: 10px;
		line-height: 0;
	}
`


export const Section = ({children, id, title, desc}) => {


	return (
		<StyledSection id={id}>
			<p className="title"> {title} </p>
			<p className="description"> {desc} </p>
			{children}
		</StyledSection>
	)
}