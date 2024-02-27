export type stringResolveType = (
  val: string | number,
  source?: string,
) => {
  low: number
  lowUnit?: string
  high: number
  highUnit?: string
}

export const resolveStringValue: stringResolveType = (val: string | number, source?: string) => {
  if (typeof val === 'number') {
    return {
      low: -val,
      high: val,
    }
  }

  const digitRegExp = RegExp(/[+-]?([0-9]*[.])?[0-9]+/)
  const wordRegExp = RegExp(/([a-z]+)/)

  const singleExpressionRegex = RegExp(/[+-]?([0-9]*[.])?[0-9]+[a-z]*/, 'g')

  const res = val.match(singleExpressionRegex)

  if (res === null) {
    // eslint-disable-next-line no-console
    console.warn(`Incorrect value for prop ${source}. Using {0, 0} instead`)
    return {
      low: 0,
      high: 0,
    }
  } else if (res.length === 1) {
    const n = res[0].match(digitRegExp)
    const u = res[0].match(wordRegExp)

    return {
      low: -n![0],
      high: +n![0],
      lowUnit: u![0],
      highUnit: u![0],
    }
  }
  const low = res[0].match(digitRegExp)
  const lowUnit = res[0].match(wordRegExp)
  const high = res[1].match(digitRegExp)
  const highUnit = res[1].match(wordRegExp)

  if (lowUnit === null || highUnit === null) {
    return {
      low: +low![0],
      high: +high![0],
    }
  }

  return {
    low: +low![0],
    high: +high![0],
    lowUnit: lowUnit[0],
    highUnit: highUnit[0],
  }
}
