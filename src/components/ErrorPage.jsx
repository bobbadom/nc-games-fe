import React from 'react'
import { useParams } from 'react-router-dom'

const ErrorPage = () => {

    const error = useParams()
    console.log(error)
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage