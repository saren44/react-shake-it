import { Playground } from "../components/Playground"
import { Section } from "../components/Section"





export const PlaygroundSection = () => {

	return (
		<Section
			id={'playground'}
			title={'Try me!'}
		>
			<Playground />
		</Section>
	)
}