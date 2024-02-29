import { ComponentProps, ReactElement } from 'react'

export interface IShakeItProps extends ComponentProps<'div'> {
  children: ReactElement
  horizontal?: number | string
  vertical?: number | string
  scale?: string
  rotation?: number | string
  opacity?: string
  duration?: number | string
  delay?: number
  iterations?: string
  precision?: number
  interpolator?: IInterpolateFn | IIndividualInterpolators
  active?: boolean
  fillMode?: string
  direction?: string
  timingFunction?: string
}

export interface IIndividualInterpolators {
  h?: IInterpolateFn
  v?: IInterpolateFn
  s?: IInterpolateFn
  r?: IInterpolateFn
  o?: IInterpolateFn
}

export interface IstyledShakeItProps {
  $anim: string
  $delay: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IInterpolateFn = (progress: number, ...args: any[]) => number
