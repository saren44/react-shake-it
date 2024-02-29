import { ShakeIt } from "react-shake-it"
import { ExampleBox } from "../components/ExampleBox"
import { Section } from "../components/Section"
import { OnClickSingleExample, OnHoverExample, SimpleExample } from '../components/Examples'
import { renderToString } from 'react-dom/server';
import jsxToString from 'jsx-to-string';
import { onClickOnceSource, onHoverExampleSource, simpleExampleSource } from "../assets/codeSamples";





export const ExamplesSection = () => {
	return (
		<Section
			id={'examples'}
			title={'Check me out!'}
			desc={'This section contains basic example shakes usage'}
		>
			<ExampleBox
				code={simpleExampleSource}
				name={'Simple'}
				desc={'A constant buzz, if you will'}
			>
					<SimpleExample />
			</ExampleBox>
			<ExampleBox
				code={onHoverExampleSource}
				name={'On hover'}
				desc={'The shake will only occur while hovering'}
			>
					<OnHoverExample />
			</ExampleBox>
			<ExampleBox
				code={onClickOnceSource}
				name={'On click'}
				desc={'The shake will occur once, on click'}
			>
				<OnClickSingleExample />
			</ExampleBox>
		</Section>
	)
}

