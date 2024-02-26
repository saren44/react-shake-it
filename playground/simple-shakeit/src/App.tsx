import './App.css'
import { ShakeIt } from '../../../src'
import { useState } from 'react'

function App() {
	const [hover, setHover] = useState<boolean>(false);



  return (
    <>
			<ShakeIt 
				active={hover}
				createOnce={true}
				onAnimationStart={() => console.log('anim start from app')}
				vertical={'10px'}
			>
				<div 
					style={{width: 200, height: 100, backgroundColor: 'inherit', cursor: 'default'}}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}

				> 
					hello world 
				</div>
			</ShakeIt>
    </>
  )
}

export default App
