import { Section } from "../components/Section"



export const ExamplesSection = () => {
	return (
		<Section
			id={'examples'}
			title={'Check me out!'}
		>
			This is the examples Section
			<div style={{height: 500}}>
				fake content
			</div>
		</Section>
	)
}