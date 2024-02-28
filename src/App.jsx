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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
			<NavBar />
			<PlaygroundSection />
			<ExamplesSection />
			<DocsSection />
    </div>
  )
}

export default App
