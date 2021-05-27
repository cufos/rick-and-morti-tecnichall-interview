import Image from 'next/image'

// styles
import styles from './styles.module.css'

export function InfoCharacter ({ name, image, episode }) {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div>
          {image && (
            <Image
              src={image}
              alt={`${name} image`}
              layout='fill'
              loading='lazy'
            />
          )}

        </div>
        <h1>{name}</h1>
      </section>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Episode</th>
            <th>Name</th>
          </tr>
        </thead>
        {episode?.map(res => (
          <tbody key={res.id}>
            <tr>
              <td>{res.episode}</td>
              <td>{res.name}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
