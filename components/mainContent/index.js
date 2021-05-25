import { useQuery } from 'react-query'
import Image from 'next/image'
import Link from 'next/link'

// styles
import styles from './styles.module.css'

export function MainContent () {
  const { isLoading, error, data } = useQuery('repoData', () =>
    window.fetch('https://rickandmortyapi.com/api/character').then(res =>
      res.json()
    )
  )

  console.log(data)
  return (
    <div>
      {data?.results?.map(res => (
        <div className={styles.container} key={res.id}>
          <h2 className={styles.name}>
            {res.name}
          </h2>
          <div className={styles.mainSection}>
            <div className={styles.imageBg}>
              <Image
                src={res.image}
                alt={`${res.name} picture`}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <section className={styles.section}>
              <p>{res.status && `Status: ${res.status}`}</p>
              <p>Gender: {res.gender}</p>
              <p>{res.type && `Type: ${res.type}`}</p>
              <p>Origin: {res.origin.name}</p>
            </section>
          </div>
          <Link href={`character/:${res.name}`}>
            <a className={styles.button}>
              All informaton
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
