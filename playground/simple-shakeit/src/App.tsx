import './App.css'
import {ShakeIt} from '../../../src'

import { interpolateCubicBezier, interpolateSin, interpolateEaseIn, interpolateEase } from '../../../src/util'





function App() {

  return (
    <>
			<ShakeIt
				horizontal={30}
				active={true}
				duration={'3s'}
				precision={0.05}
				interpolator={interpolateSin}
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
