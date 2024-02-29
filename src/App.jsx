import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Title } from './components/Title'
import { Section } from './components/Section'
import { NavBar } from './components/NavBar'
import { PlaygroundSection } from './sections/PlaygroundSection'
import { ExamplesSection } from './sections/ExamplesSection'
import { DocsSection } from './sections/DocsSection'
import { AdvancedExamplesSection } from './sections/AdvancedExamplesSection'
import { ShakeIt } from 'react-shake-it'

function App() {
  const [shakeApp, setShakeApp] = useState(false)

  return (
		<ShakeIt
			active={shakeApp}
			iterations='1'
			horizontal={10}
			vertical={10}
			rotation={5}
			duration='1s'
			precision={0.02}
		>
			<div>
				<NavBar shakeCallback={() => setShakeApp(true)} isShaked={shakeApp}/>
				<PlaygroundSection />
				<ExamplesSection />
				<AdvancedExamplesSection />
				<DocsSection />
    	</div>
		</ShakeIt>

  )
}

export default App