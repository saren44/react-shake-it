import { IInterpolateFn } from '../ShakeIt'

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
