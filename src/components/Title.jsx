import styled from "styled-components"
import { ShakeIt } from "react-shake-it"

const StyledTitle = styled.p`
	font-family: "Titillium Web", sans-serif;
	font-size: 50px;
	line-height: 0%;
	font-weight: 200;
	margin-left: 20px;
`


export const Title = () => {
	return( 
	<ShakeIt
		horizontal={2}
		vertical={2}
		rotation={'-5deg -2deg'}
		duration={'60ms'}
		direction={'alternate'}
	>
		<StyledTitle>
			react-shake-it
		</StyledTitle>
	</ShakeIt>
	)

}