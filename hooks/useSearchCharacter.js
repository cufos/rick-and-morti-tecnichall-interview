import { useState, useEffect } from 'react'
import { searchByName } from '../services'

export function useSearchCharacter ({ name }) {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    searchByName({ name })
      .then(res => {
        setData(res)
        setLoading(false)
      })
      .catch(err => setError(true))
  }, [data])

  return {
    data,
    error,
    loading
  }
}
