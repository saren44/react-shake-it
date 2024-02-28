import './App.css'
import {ShakeIt} from '../../../src'





function App() {

  return (
    <>
			<ShakeIt
				horizontal={30}
				active={true}
				vertical={10}
			>
				<div 
					style={{width: 200, height: 100, backgroundColor: 'red', cursor: 'default'}}

				> 
					hello world 
				</div>
			</ShakeIt>
    </>
  )
}

export default App
