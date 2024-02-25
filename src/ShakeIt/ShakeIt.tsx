import styled from 'styled-components'
import { IShakeItProps } from './types'
import { interpolate, interpolateRandom } from '../util'
import { useEffect, useState } from 'react'

export const StyledShakeIt = styled.div<{
  $anim?: string
  $duration?: string
  $iters?: string
}>`
  animation: shake_it_baby ${(props) => props.$duration} ${(props) => props.$iters} normal;

  ${(props) => props.$anim}
`

export const ShakeIt = ({
  children,
  horizontal = 0,
  vertical = 0,
  scale = '1.0 1.0',
  opacity = '1.0 0.2',
  rotation = 2,
  duration = '1000ms',
  delay = 1000,
  iterations = 'infinite',
  interpolateFn = interpolateRandom,
  active = true,
  precision = 0.2,
}: IShakeItProps) => {
  const [isActiveAndReady, setIsActiveAndReady] = useState<boolean>(false)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined
    if (!active) {
      setIsActiveAndReady(false)
      return
    }
    if (delay) {
      t = setTimeout(() => setIsActiveAndReady(true), +delay)
      console.log(t)
    }

    return () => {
      t && clearTimeout(t)
    }
  }, [active, delay])

  if (!isActiveAndReady) {
    return <div>{children}</div>
  }

  const getTranslation = (progress: number) => {
    return `translate(${interpolate(+horizontal, -horizontal, interpolateFn(progress))}px, ${interpolate(+vertical, -vertical, interpolateFn(progress))}px) `
  }

  const getRotation = (progress: number) => {
    return `rotate(${interpolate(+rotation, -rotation, interpolateFn(progress))}deg) `
  }

  const getScale = (progress: number) => {
    const s = scale.split(' ')
    return `scale(${interpolate(+s[0], +s[1], interpolateFn(progress), false)}) `
  }

  const getOpacity = (progress: number) => {
    const o = opacity.split(' ')
    return `opacity: ${interpolate(+o[0], +o[1], interpolateFn(progress), false)} `
  }

  const buildAnim = () => {
    let steps = Math.floor(1 / precision)
    const stepSize = 100 / steps
    steps += 1 //frame at 100%
    let anim = '@keyframes shake_it_baby {\n'

    for (let i = 0; i < steps; i++) {
      let stepBuilder = ''
      stepBuilder += `${stepSize * i}%{`
      stepBuilder += 'transform: '
      stepBuilder += getTranslation(precision * i)
      stepBuilder += getRotation(precision * i)
      stepBuilder += getScale(precision * i)
      stepBuilder += '; '
      stepBuilder += getOpacity(precision * i)
      stepBuilder += ';}\n '
      anim += stepBuilder
    }
    anim += '}'
    //console.log(anim)
    return anim
  }

  buildAnim()

  return (
    <StyledShakeIt
      $anim={buildAnim()}
      $duration={duration?.toString()}
      $iters={iterations?.toString()}
    >
      {children}
    </StyledShakeIt>
  )
}
