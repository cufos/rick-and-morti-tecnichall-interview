import { useQuery } from 'react-query'

// components
import { Error } from '../../constants/error'
import { Loading } from '../../constants/loading'
import { Character } from '../character'

// styles
import styles from './styles.module.css'

export function MainContent () {
  const { isLoading, error, data } = useQuery('All characters', () =>
    window.fetch('https://rickandmortyapi.com/api/character').then(res =>
      res.json()
    )
  )

  if (isLoading) return <Loading />
  if (error) return <Error />

  return (
    <div className={styles.wrapper}>
      {data?.results?.map(res => (
        <Character key={res.id} {...res} />
      ))}
    </div>
  )
}
