import { ComponentProps, ReactElement } from 'react'

export interface IShakeItProps extends ComponentProps<'div'> {
  children: ReactElement
  horizontal?: number | string
  vertical?: number | string
  scale?: string
  rotation?: number | string
  opacity?: string
  duration?: number | string
  delay?: number | string
  iterations?: string
  precision?: number
  interpolateFn?: IInterpolateFn
  active?: boolean
  createOnce?: boolean
}

export interface IstyledShakeItProps {
  $anim: string
  $delay: string
}

export type IInterpolateFn = (progress: number) => number

export interface IValues {
  horizontal?: number | string
  vertical?: number | string
  scale?: string
  rotation?: number | string
  opacity?: string
  duration?: number | string
  precision?: number
}

export interface IIndexable {
  [key: string]: number | string
}
