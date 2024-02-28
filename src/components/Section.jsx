import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
	width: 80vw;
	margin-left: 10vw;
	margin-top: 0;
	margin-bottom: 0;
	.title{
		font-size: 40px;
		font-weight: 400;
		margin: 0;
	}
`


export const Section = ({children, id, title}) => {


	return (
		<StyledSection id={id}>
			<p className="title"> {title} </p>
			{children}
		</StyledSection>
	)
}