import './App.css'
import { interpolateLinear, interpolateLinearReverse } from '../../../src/util';
import { ShakeIt } from '../../../dist/ShakeIt';

function App() {

  return (
    <>
			<ShakeIt 
				active={true}
				onAnimationStart={() => console.log('anim start from app')}
				horizontal={50}
				opacity='0.0 1.0'
				duration='3000ms'
				vertical={"0px 200px"}
				interpolator={{
					h: interpolateLinear,
					o: interpolateLinearReverse,
					v: interpolateLinear
				}}
			>
				<div 
					style={{width: 200, height: 100, backgroundColor: 'inherit', cursor: 'default'}}

				> 
					hello world 
				</div>
			</ShakeIt>
    </>
  )
}

export default App
