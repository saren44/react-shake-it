import { Section } from "../components/Section"



export const DocsSection = () => {
	return (
		<Section
			id={'docs'}
			title={'Get to know me!'}
		>
			This is the docs Section
			<div style={{height: 500}}>
				fake content
			</div>
		</Section>
	)
}