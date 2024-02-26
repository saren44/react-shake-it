import { interpolateFnType } from '../ShakeIt'

export const interpolate = (a: number, b: number, x: number, isInteger: boolean = true) => {
  if (isInteger) {
    return Math.floor(x * a + (1 - x) * b)
  } else {
    return Math.round((x * a + (1 - x) * b) * 100) / 100
  }
}

export const interpolateRandom: interpolateFnType = () => {
  return Math.random()
}

export const interpolateLinear: interpolateFnType = (progress: number) => {
  return progress
}
