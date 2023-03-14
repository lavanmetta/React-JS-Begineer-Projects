import React from 'react'
import { ThreeCircles } from  'react-loader-spinner'

export default function Loader() {
  return (
    <ThreeCircles
    height="80"
    width="80"
    color="white"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
    />
  )
}
