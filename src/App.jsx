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

import { ThemeProvider } from 'styled-components'
import { ShakeIt } from 'react-shake-it'
import { GlobalStyles, darkTheme, lightTheme } from './theme'

function App() {
	const [isShaking, setIsShaking] = useState(false);
  const [shakeApp, setShakeApp] = useState(false)


	const getUserTheme = () => {
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (prefersDark) {
			return darkTheme;
		}

		return lightTheme;
	}

  return (
		<ThemeProvider theme={getUserTheme()}>
			<GlobalStyles />
			<ShakeIt
				active={shakeApp}
				iterations='1'
				horizontal={10}
				vertical={10}
				rotation={5}
				duration='1s'
				precision={0.02}
				onAnimationEnd={() => setIsShaking(false)}
			>
			<div>
				<NavBar shakeCallback={() => {setShakeApp(true); setIsShaking(true) }} isShaked={shakeApp}/>
				<PlaygroundSection />
				<ExamplesSection />
				<AdvancedExamplesSection />
				{isShaking ? <div /> : <DocsSection />}
    	</div>
		</ShakeIt>
		</ThemeProvider>


  )
}

export default App
