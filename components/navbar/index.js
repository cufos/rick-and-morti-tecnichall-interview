import Link from 'next/link'
// components
import { Logo } from '../icons/Logo'
// styles
import styles from './navbar.module.css'

export function Navbar () {
  return (
    <div className={styles.wraper}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href='/'>
            <a>
              <Logo width={150} height={60} />
            </a>
          </Link>
        </h1>
        <form className={styles.form}>
          <input type='text' placeholder='Search for a character...' />
          <button>
            Search
          </button>
        </form>
      </div>
    </div>
  )
}
