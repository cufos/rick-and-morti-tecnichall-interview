import { useState, useEffect } from 'react'
// services
import { allCharacters } from '../services'

export function useGetCharacters () {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    allCharacters()
      .then(res => {
        setData(res)
        setIsLoading(false)
      }).catch(err => setError(err.message))
  }, [])

  return {
    data, error, isLoading, setData, setError, setIsLoading
  }
}
