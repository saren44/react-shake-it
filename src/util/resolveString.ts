export type stringResolveType = (val: string | number) => {
  low: number
  lowUnit?: string
  high: number
  highUnit?: string
}

export const resolveStringValue: stringResolveType = (val: string | number) => {
  if (typeof val === 'number') {
    return {
      low: -val,
      high: val,
    }
  }

  const digitRegExp = RegExp(/(\d*)/)
  const wordRegExp = RegExp(/([a-z]*)/)
  const valSplit = val.split(/\s+/)

  const lowReg = digitRegExp.exec(valSplit[0])
  const highReg = digitRegExp.exec(valSplit[1])
  const lowUnitReg = wordRegExp.exec(valSplit[0])
  const highUnitReg = wordRegExp.exec(valSplit[1])

  const lowPresent = lowReg !== null
  const highPresent = highReg !== null
  const lowUnitPresent = lowUnitReg !== null
  const highUnitPresent = highUnitReg !== null

  let low, high, lowUnit, highUnit

  if (!lowPresent) {
    low = 0
  } else {
    low = +lowReg![0]
  }

  if (!lowUnitPresent) {
    lowUnit = undefined
  } else {
    lowUnit = lowUnitReg![0]
  }

  if (!highPresent) {
    return {
      low: -low,
      lowUnit,
      high: low,
      highUnit: lowUnit,
    }
  } else {
    high = +highReg![0]
  }

  if (highUnitPresent) {
    highUnit = undefined
  } else {
    highUnit = highUnitReg![0]
  }

  return {
    low,
    high,
    lowUnit,
    highUnit,
  }
}
