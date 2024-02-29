import { ShakeIt } from "react-shake-it";
import { useState } from "react";


export const SimpleExample = () => (
	<ShakeIt
		horizontal={2}
		vertical={2}
		rotation={1}
		precision={0.1}
		duration={'200ms'}
		direction="alternate"
	>
		<div> hello </div>
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
			<div> hello </div>
		</ShakeIt>
	)
}