import styled from 'styled-components'
import { IShakeItProps } from './types'
import { interpolate, interpolateRandom, makeId, resolveStringValue } from '../util'
import { useEffect, useMemo, useState, useRef } from 'react'

export const StyledShakeIt = styled.div<{
  $anim?: string
  $duration?: string
  $iters?: string
  $tf?: string
  $direction?: string
  $fm?: string
  $animName?: string
}>`
  animation: ${(props) => props.$animName};
  animation-duration: ${(props) => props.$duration};
  animation-timing-function: ${(props) => props.$tf};
  animation-iteration-count: ${(props) => props.$iters};
  animation-direction: ${(props) => props.$direction};
  animation-fill-mode: ${(props) => props.$fm};
  ${(props) => props.$anim};
`

export const ShakeIt: React.FC<IShakeItProps> = ({
  children,
  horizontal = 0,
  vertical = 0,
  scale = '1.0 1.0',
  opacity = '1.0 1.0',
  rotation = 0,
  duration = '400ms',
  delay,
  iterations = 'infinite',
  interpolator = interpolateRandom,
  active = true,
  precision = 0.2,
  fillMode = 'none',
  direction = 'normal',
  timingFunction = 'linear',
  ...props
}: IShakeItProps) => {
  const [isActiveAndReady, setIsActiveAndReady] = useState<boolean>(false)
  const animId = useRef<string>(makeId(6))

  const useSetupInterpolators = () =>
    useMemo(() => {
      if (typeof interpolator === 'function') {
        return {
          h: interpolator,
          v: interpolator,
          s: interpolator,
          r: interpolator,
          o: interpolator,
        }
      }
      return {
        h: interpolator.h ? interpolator.h : interpolateRandom,
        v: interpolator.v ? interpolator.v : interpolateRandom,
        s: interpolator.s ? interpolator.s : interpolateRandom,
        r: interpolator.r ? interpolator.r : interpolateRandom,
        o: interpolator.o ? interpolator.o : interpolateRandom,
      }
    }, [interpolator])

  const inters = useSetupInterpolators()
  const getTranslation = (progress: number) => {
    const resolvedHorizontal = resolveStringValue(horizontal, 'horizontal')
    const resolvedVertical = resolveStringValue(vertical, 'vertical')
    //console.log(resolvedHorizontal)
    return `translate(${interpolate(resolvedHorizontal.low, resolvedHorizontal.high, inters.h(progress))}${resolvedHorizontal.lowUnit ? resolvedHorizontal.lowUnit : 'px'}, ${interpolate(resolvedVertical.low, resolvedVertical.high, inters.v(progress))}${resolvedVertical.lowUnit ? resolvedVertical.lowUnit : 'px'}) `
  }

  const getRotation = (progress: number) => {
    const resolved = resolveStringValue(rotation, 'rotation')
    return `rotate(${interpolate(resolved.low, resolved.high, inters.r(progress))}${resolved.lowUnit ? resolved.lowUnit : 'deg'}) `
  }

  const getScale = (progress: number) => {
    const resolved = resolveStringValue(scale, 'scale')
    return `scale(${interpolate(resolved.low, resolved.high, inters.s(progress), false)}) `
  }

  const getOpacity = (progress: number) => {
    const resolved = resolveStringValue(opacity, 'opacity')
    //console.log(resolved)
    return `opacity: ${interpolate(resolved.low, resolved.high, inters.o(progress), false)} `
  }

  const useBuildAnim = () =>
    useMemo(() => {
      let steps = Math.floor(1 / precision)
      const stepSize = 100 / steps
      steps += 1 //frame at 100%
      let anim = `@keyframes ${animId.current} {\n`

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
    }, [horizontal, vertical, scale, rotation, opacity, precision])

  //console.log('ANIM: ' + anim.current)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined
    if (!active) {
      setIsActiveAndReady(false)
      return
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
  }, [active, delay])

  const anim = useBuildAnim()

  if (!isActiveAndReady) {
    return <div {...props}>{children}</div>
  }

  return (
    <StyledShakeIt
      $anim={anim}
      $duration={duration?.toString()}
      $iters={iterations?.toString()}
      $fm={fillMode}
      $tf={timingFunction}
      $direction={direction}
      $animName={animId.current}
      {...props}
    >
      {children}
    </StyledShakeIt>
  )
}
