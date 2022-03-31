import React from 'react'

type numProps = {
    value: number
}

type PositiveProps = numProps & {
    isPositive : boolean,
    isZero?: never,
    isNagative?: never,
}
type ZeroProps = numProps & {
    isPositive ?: never,
    isZero: boolean,
    isNagative?: never,
}
type NagativeProps = numProps & {
    isPositive ?: never,
    isZero?: never,
    isNagative: boolean,
}

type reProps = NagativeProps | ZeroProps | PositiveProps

const Restricting = ({value, isPositive, isZero, isNagative} : reProps) => {
  return (
    <div>
        {value} {isPositive && 'Positive'}
        {isZero && 'Zero'} {isNagative && 'Nagative'}
    </div>
  )
}

export default Restricting