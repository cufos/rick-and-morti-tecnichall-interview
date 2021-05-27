// components
import { Error } from '../../constants/error'
import { Loading } from '../../constants/loading'
import { Character } from '../character'

// styles
import styles from '../../styles/home.module.css'
// hooks
import { useGetCharacters } from '../../hooks/useGetCharacters'
// services
import { handlePage } from '../../services'

export function MainContent () {
  const { data, error, isLoading, setData, setIsLoading, setError } = useGetCharacters()

  const handleNextPage = () => {
    handlePage(data.info.next)
      .then(res => {
        setData(res)
        setIsLoading(false)
      })
      .catch(err => setError(err.message))
  }
  const handlePrevPage = () => {
    handlePage(data.info.prev)
      .then(res => {
        setData(res)
      })
      .catch(err => setError(err.message))
  }

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading && <Loading />}
        {error && <Error />}
        {data?.results?.map(res => (
          <Character key={res.id} {...res} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} className={styles.button}>Prev page</button>
        <button onClick={handleNextPage} className={styles.button}>Next page</button>
      </div>
    </>
  )
}
