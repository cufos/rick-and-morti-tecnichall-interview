// styles
import styles from './footer.module.css'

export function Footer () {
  return (
    <footer className={styles.wraper}>
      <div className={styles.container}>
        <p>
          Site created with the
          <span className={styles.links}>
            <a href='https://rickandmortyapi.com/' target='_blank' rel='noreferrer noopener nofollow'>Rick And Morty API</a>
          </span>
          and
          <span className={styles.links}>
            <a href='https://nextjs.org/' target='_blank' rel='noreferrer noopener nofollow'>
              NextJs
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
