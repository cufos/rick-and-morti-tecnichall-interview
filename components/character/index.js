import Image from 'next/image'
import Link from 'next/link'

// styles
import styles from './styles.module.css'

export function Character ({ id, name, status, origin, gender, type, image }) {
  return (
    <Link href={`/details/:${id}`}>
      <a className={styles.container}>
        <div className={styles.imageContent}>
          <Image
            src={image}
            alt={`${name} picture`}
            layout='fill'
          />
        </div>
        <section className={styles.content}>
          <p className={styles.name}>{name}</p>
          {status !== 'unknown' && (
            <p className={styles.status}> Status: {status}</p>
          )}
          <p className={styles.origin}>
            Origin: {origin.name}
          </p>
          <p className={styles.gender}>Gender: {gender}</p>
          {type && (
            <p className={styles.type}>Type: {type}</p>
          )}
        </section>
      </a>
    </Link>
  )
}
