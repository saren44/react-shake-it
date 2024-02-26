import styled from 'styled-components'
import { IIndexable, IShakeItProps, IValues } from './types'
import { interpolate, interpolateRandom, resolveStringValue } from '../util'
import { useEffect, useRef, useState } from 'react'

export const StyledShakeIt = styled.div<{
  $anim?: string
  $duration?: string
  $iters?: string
}>`
  animation: shake_it_baby ${(props) => props.$duration} ${(props) => props.$iters} normal;

  ${(props) => props.$anim}
`

export const ShakeIt: React.FC<IShakeItProps> = ({
  children,
  horizontal = '10px',
  vertical = 0,
  scale = '1.0 1.0',
  opacity = '1.0 1.0',
  rotation = 1,
  duration = '400ms',
  delay,
  iterations = 'infinite',
  interpolateFn = interpolateRandom,
  active = true,
  precision = 0.2,
  createOnce = false,
  ...props
}: IShakeItProps) => {
  const [isActiveAndReady, setIsActiveAndReady] = useState<boolean>(false)
  const values = useRef<IValues>({
    horizontal,
    vertical,
    scale,
    opacity,
    rotation,
    precision,
  })

  const detectValuesChange = (data: IValues) => {
    const keysPrev = Object.keys(values.current)

    for (const key of keysPrev) {
      if ((values.current as IIndexable)[key] !== (data as IIndexable)[key]) {
        return true
      }
    }

    return false
  }

  const anim = useRef<string>('')

  const getTranslation = (progress: number) => {
    const resolvedHorizontal = resolveStringValue(horizontal)
    const resolvedVertical = resolveStringValue(vertical)
    return `translate(${interpolate(resolvedHorizontal.low, resolvedHorizontal.high, interpolateFn(progress))}${resolvedHorizontal.lowUnit ? resolvedHorizontal.lowUnit : 'px'}, ${interpolate(resolvedVertical.low, resolvedVertical.high, interpolateFn(progress))}${resolvedVertical.lowUnit ? resolvedVertical.lowUnit : 'px'}) `
  }

  const getRotation = (progress: number) => {
    const resolved = resolveStringValue(rotation)
    return `rotate(${interpolate(resolved.low, resolved.high, interpolateFn(progress))}${resolved.lowUnit ? resolved.lowUnit : 'deg'}) `
  }

  const getScale = (progress: number) => {
    const resolved = resolveStringValue(scale)
    return `scale(${interpolate(resolved.low, resolved.high, interpolateFn(progress), false)}) `
  }

  const getOpacity = (progress: number) => {
    const resolved = resolveStringValue(opacity)
    return `opacity: ${interpolate(resolved.low, resolved.high, interpolateFn(progress), false)} `
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

  //console.log('ANIM: ' + anim.current)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined
    if (!active) {
      setIsActiveAndReady(false)
      return
    }
    if (
      !createOnce ||
      anim.current === '' ||
      detectValuesChange({ horizontal, vertical, scale, opacity, rotation, precision } as IValues)
    ) {
      values.current = { horizontal, vertical, scale, opacity, rotation, precision }
      anim.current = buildAnim()
    }

    if (delay !== undefined) {
      t = setTimeout(() => setIsActiveAndReady(true), +delay)
      //console.log(t)
    } else {
      setIsActiveAndReady(true)
    }

    return () => {
      t && clearTimeout(t)
    }
  })

  if (!isActiveAndReady) {
    return <div>{children}</div>
  }

  return (
    <StyledShakeIt
      $anim={anim.current}
      $duration={duration?.toString()}
      $iters={iterations?.toString()}
      {...props}
    >
      {children}
    </StyledShakeIt>
  )
}
