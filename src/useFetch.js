import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https://swapi.dev/api/planets`

const useFetch = (urlParams, type) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.results) {
        setData(data.results)
      } else {
        setData(data)
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError({ show: true, msg: 'Residents is Empty' })
      console.log(error)
    }
  }

  useEffect(() => {
    if (type === 'people') {
      fetchMovies(`${urlParams}`)
    } else {
      fetchMovies(`${API_ENDPOINT}${urlParams}`)
    }
  }, [urlParams])

  return { isLoading, error, data }
}

export default useFetch
