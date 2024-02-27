import './App.css'
import { ShakeIt } from '../../../src'
import { useState } from 'react'
import { interpolateLinear, interpolateLinearReverse } from '../../../src/util';

function App() {
	const [hover, setHover] = useState<boolean>(false);



  return (
    <>
			<ShakeIt 
				active={hover}
				onAnimationStart={() => console.log('anim start from app')}
				horizontal={"asd"}
				opacity='0.0 1.0'
				interpolator={{
					h: interpolateLinear,
					o: interpolateLinearReverse
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
