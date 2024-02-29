import { ShakeIt } from "react-shake-it"
import { ExampleBox } from "../components/ExampleBox"
import { Section } from "../components/Section"
import { OnHoverExample, SimpleExample } from '../components/Examples'
import { renderToString } from 'react-dom/server';
import jsxToString from 'jsx-to-string';
import { onHoverExampleSource, simpleExampleSource } from "../assets/codeSamples";





export const ExamplesSection = () => {
	return (
		<Section
			id={'examples'}
			title={'Check me out!'}
		>
			<ExampleBox
				code={simpleExampleSource}
				name={'Simple'}
				desc={'This example show the simplest, out-of-the-box way of using ShakeIt'}
			>
					<SimpleExample />
			</ExampleBox>
			<ExampleBox
				code={onHoverExampleSource}
				name={'On hover'}
				desc={'The shake wil only happen, while hovering'}
			>
					<OnHoverExample />
			</ExampleBox>
		</Section>
	)
}