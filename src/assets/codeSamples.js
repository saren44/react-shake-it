export const simpleExampleSource = `const SimpleExample = () => (
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
)`

export const onHoverExampleSource = `const OnHoverExample = () => {
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
}`


export const onClickOnceSource = `export const OnClickSsngleExample = () => {
	const [clicked, setClicked] = useState(false);
	return(
		<ShakeIt
			active={hover}
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
			<div> hello </div>
		</ShakeIt>
	)
}`

export const basicInterpolatorSource = `export const BasicInterpolatorExample = () => (
	<ShakeIt
		opacity="0.0 1.0"
		scale="1.0 2.0"
		duration={'500ms'}
		interpolator={interpolateLinear}
	>
		<div> hello </div>
	</ShakeIt>
)`

export const individualInterpolatorsSource = `export const IndividualInterpolatorsExample = () => (
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
		<div> hello </div>
	</ShakeIt>
)`

export const customInterpolatorSource = `export const CustomInterpolatorsExample = () => {
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
			<div> hello </div>
		</ShakeIt>
	)
}`
