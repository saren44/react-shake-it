import { ShakeIt, interpolateLinear, interpolateCos, interpolateSin, interpolateLinearReverse } from "react-shake-it";
import { useState } from "react";
import styled from 'styled-components'


export const AnimatedDiv = styled.div`
	-webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

	font-size: 20px;

	&:hover {
		cursor: pointer;
	}
`


export const SimpleExample = () => (
	<ShakeIt
		horizontal={2}
		vertical={2}
		rotation={1}
		precision={0.1}
		duration={'200ms'}
		direction="alternate"
	>
		<AnimatedDiv> bzzzz </AnimatedDiv>
	</ShakeIt>
)

export const OnHoverExample = () => {
	const [hover, setHover] = useState(false);
	return(
		<ShakeIt
			active={hover}
			horizontal={2}
			vertical={2}
			rotation={1}
			precision={0.1}
			duration={'200ms'}
			direction="alternate"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<AnimatedDiv> hover! </AnimatedDiv>
		</ShakeIt>
	)
}

export const OnClickSingleExample = () => {
	const [clicked, setClicked] = useState(false);
	return(
		<ShakeIt
			active={clicked}
			horizontal={2}
			vertical={2}
			rotation={1}
			precision={0.1}
			duration={'200ms'}
			iterations="1"
			direction="normal"
			onClick={() => setClicked(true)}
			onAnimationEnd={() => setClicked(false)}
		>
			<AnimatedDiv> click! </AnimatedDiv>
		</ShakeIt>
	)
}

export const BasicInterpolatorExample = () => (
	<ShakeIt
		opacity="0.0 1.0"
		scale="1.0 2.0"
		duration={'500ms'}
		interpolator={interpolateLinear}
	>
		<AnimatedDiv> boo </AnimatedDiv>
	</ShakeIt>
)

export const IndividualInterpolatorsExample = () => (
	<ShakeIt
		horizontal={50}
		vertical={50}
		duration={'3s'}
		precision={0.05}
		interpolator={{
			h: interpolateSin,
			v: interpolateCos
		}}
	>
		<AnimatedDiv> round n' round </AnimatedDiv>
	</ShakeIt>
)

export const CustomInterpolatorsExample = () => {
	const customInterpolator = (progress) => {
		if (progress < 0.5) {
			return interpolateLinear(progress);
		}
		else {
			return interpolateCos(progress)
		}
	}
	return(
		<ShakeIt
			horizontal={5}
			vertical={50}
			duration={'3s'}
			precision={0.05}
			interpolator={{
				v: customInterpolator,
			}}
		>
			<AnimatedDiv> hello </AnimatedDiv>
		</ShakeIt>
	)
}