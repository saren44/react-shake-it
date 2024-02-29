import { IInterpolateFn } from '../ShakeIt'
import { Bezier } from 'bezier-js'

export const interpolate = (a: number, b: number, x: number, isInteger: boolean = true) => {
  if (isInteger) {
    return Math.floor(x * b + (1 - x) * a)
  } else {
    return Math.round((x * b + (1 - x) * a) * 100) / 100
  }
}

export const interpolateRandom: IInterpolateFn = () => {
  return Math.random()
}

export const interpolateLinear: IInterpolateFn = (progress: number) => {
  return progress
}

export const interpolateLinearReverse: IInterpolateFn = (progress: number) => {
  return 1 / progress
}

export const interpolateSin: IInterpolateFn = (progress: number) => {
  return 1 + 0.5 * Math.sin(Math.PI * 2 * progress)
}

export const interpolateCos: IInterpolateFn = (progress: number) => {
  return 1 + 0.5 * Math.cos(Math.PI * 2 * progress)
}

export const interpolateCubicBezier: IInterpolateFn = (
  progress: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) => {
  const bezier = new Bezier(0, 0, x1, y1, x2, y2, 1, 1)

  //console.log(progress, bezier.get(progress))

  return bezier.get(progress).y
}

export const interpolateEase: IInterpolateFn = (progress) => {
  return interpolateCubicBezier(progress, 0.25, 0.1, 0.25, 1)
}

export const interpolateEaseIn: IInterpolateFn = (progress) => {
  return interpolateCubicBezier(progress, 0.42, 0, 1, 1)
}

export const interpolateEaseOut: IInterpolateFn = (progress) => {
  return interpolateCubicBezier(progress, 0, 0, 0.58, 1)
}

export const interpolateEaseInOut: IInterpolateFn = (progress) => {
  return interpolateCubicBezier(progress, 0.42, 0, 0.58, 1)
}
