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
  iterations?: number | string
  precision?: number
  interpolateFn?: interpolateFnType
  active?: boolean
}

export interface IstyledShakeItProps {
  $anim: string
  $delay: string
}

export type interpolateFnType = (progress: number) => number
