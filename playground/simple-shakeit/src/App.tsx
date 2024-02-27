import './App.css'
import { ShakeIt } from '../../../src'
import { useState } from 'react'
import { interpolateLinear } from '../../../src/util';

function App() {
	const [hover, setHover] = useState<boolean>(false);



  return (
    <>
			<ShakeIt 
				active={hover}
				onAnimationStart={() => console.log('anim start from app')}
				vertical={20}
				horizontal={-100}
				interpolator={{
					h: interpolateLinear
				}}
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
