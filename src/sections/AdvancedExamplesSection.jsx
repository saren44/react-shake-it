import { ExampleBox } from "../components/ExampleBox"
import { Section } from "../components/Section"
import { BasicInterpolatorExample, CustomInterpolatorsExample, IndividualInterpolatorsExample } from '../components/Examples'
import { basicInterpolatorSource, customInterpolatorSource, individualInterpolatorsSource } from "../assets/codeSamples";


export const AdvancedExamplesSection = () => {
	return (
		<Section
			id={'advanced-examples'}
			title={'Learn my biggest secrets!'}
			desc={'This section contains example usage of interpolator function, moving away from shakes to more predictable animations.'}
		>
			<ExampleBox
				code={basicInterpolatorSource}
				name={'Basic interpolator'}
				desc={'The interpolator function is applied to all animated values.'}
			>
					<BasicInterpolatorExample />
			</ExampleBox>
			<ExampleBox
				code={individualInterpolatorsSource}
				name={'Individual interpolators'}
				desc={'Interpolators can be targetted toward specific prop. Interpolators not defined in the object will default to interpolateRandom.'}
			>
					<IndividualInterpolatorsExample />
			</ExampleBox>
			<ExampleBox
				code={customInterpolatorSource}
				name={'Custom interpolators'}
				desc={'This example shows a custom defined interpolator.'}
			>
				<CustomInterpolatorsExample />
			</ExampleBox>
		</Section>
	)
}