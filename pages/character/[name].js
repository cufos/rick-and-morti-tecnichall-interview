import { useRouter } from 'next/router'
// components
import { Character } from '../../components/character'
import { Error } from '../../constants/error'
import { Loading } from '../../constants/loading'
// styles
import styles from '../../styles/home.module.css'

// hooks
import { useSearchCharacter } from '../../hooks/useSearchCharacter'

export default function SingleCharacter () {
  const router = useRouter()

  const { data, error, loading } = useSearchCharacter({ name: router.query.name })
  return (
    <div className={styles.wrapper}>
      {loading && <Loading />}
      {error && <Error />}
      {data?.results?.map(res => (
        <Character key={res.id} {...res} />
      ))}
    </div>
  )
}
