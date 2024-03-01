import { interpolateCos, interpolateCubicBezier, interpolateEase, interpolateEaseIn, interpolateEaseInOut, interpolateLinear, interpolateLinearReverse, interpolateRandom, interpolateSin } from "react-shake-it"
import { InterpolatorBox } from "../components/InterpolatorBox"
import { Section } from "../components/Section"



export const DocsSection = () => {
	return (
		<Section
			id={'interpolators'}
			title={'Interpolate me!'}
			desc={'This section provides more detailed information about built-in interpolators. All interpolators return a number value between 0 and 1.'}
		>
			<InterpolatorBox 
				name={'interpolateRandom'}
				args={['none']}
				desc={'Default interpolator function. Returns a random number.'}
				fn={interpolateRandom}
			/>

			<InterpolatorBox 
				name={'interpolateLinear'}
				args={[
					'progress: number'
				]}
				desc={'Linear interpolation. Returns unedited progress.'}
				fn={interpolateLinear}
			/>

			<InterpolatorBox 
				name={'interpolateSin'}
				args={[
					'progress: number'
				]}
				desc={'Normalized sine function.'}
				fn={interpolateSin}
			/>	
			<InterpolatorBox 
				name={'interpolateCos'}
				args={[
					'progress: number'
				]}
				desc={'Normalized cosine function.'}
				fn={interpolateCos}
			/>	
			<InterpolatorBox 
				name={'interpolateEase'}
				args={[
					'progress: number'
				]}
				desc={'Default CSS ease function.'}
				fn={interpolateEase}
			/>	
			<InterpolatorBox 
				name={'interpolateEaseIn'}
				args={[
					'progress: number'
				]}
				desc={'Default CSS ease-in function.'}
				fn={interpolateEaseIn}
			/>	
			<InterpolatorBox 
				name={'interpolateEaseOut'}
				args={[
					'progress: number'
				]}
				desc={'Default CSS ease-out function.'}
				fn={interpolateEaseIn}
			/>	
			<InterpolatorBox 
				name={'interpolateEaseInOut'}
				args={[
					'progress: number'
				]}
				desc={'Default CSS ease-in-out function.'}
				fn={interpolateEaseInOut}
			/>	
			<InterpolatorBox 
				name={'interpolateCubicBezier'}
				args={[
					'progress: number;',
					'x1: number // x value of the first point, here 0.1',
					'y1: number // y value of the first point, here 0.9',
					'x2: number // x value of the first point, here 0.9',
					'y2: number // y value of the first point, here 0.1',
				]}
				desc={'Customizable cubic bezier function.'}
				fn={(progress) => interpolateCubicBezier(progress, 0.1, 0.9, 0.9, 0.1)}
			/>	
		</Section>
	)
}