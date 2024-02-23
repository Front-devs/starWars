import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch'
const Residence = ({ residents }) => {
  const api = residents[0] || ''
  const { isLoading, error, data: resident } = useFetch(api, 'people')

  if (isLoading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h3>Residence is Empty</h3>
      </div>
    )
  }
  const { name, height, hair_color, eye_color } = resident

  return (
    <div>
      <h4 style={{ textAlign: 'center' }}>Resident</h4>
      <p>Name : {name}</p>
      <p>Height : {height}</p>
      <p>Hair Color :{hair_color}</p>
      <p>Eye Color : {eye_color}</p>
    </div>
  )
}

export default Residence
