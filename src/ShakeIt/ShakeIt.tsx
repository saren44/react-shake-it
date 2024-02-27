import styled from 'styled-components'
import { IShakeItProps } from './types'
import { interpolate, interpolateRandom, resolveStringValue } from '../util'
import { useEffect, useMemo, useState } from 'react'

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
  ...props
}: IShakeItProps) => {
  const [isActiveAndReady, setIsActiveAndReady] = useState<boolean>(false)

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
  }, [delay, active])

  const anim = useBuildAnim()

  if (!isActiveAndReady) {
    return <div>{children}</div>
  }

  return (
    <StyledShakeIt
      $anim={anim}
      $duration={duration?.toString()}
      $iters={iterations?.toString()}
      {...props}
    >
      {children}
    </StyledShakeIt>
  )
}
