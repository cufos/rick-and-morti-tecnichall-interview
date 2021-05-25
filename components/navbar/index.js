import Link from 'next/link'
// components
import { Logo } from '../logo'
// styles
import styles from './navbar.module.css'

export function Navbar () {
  return (
    <div className={styles.wraper}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href='/'>
            <a>
              <Logo width={180} height={60} />
            </a>
          </Link>
        </h1>
        <form className={styles.form}>
          <input type='text' placeholder='Search for a character...' />
          <button>Search</button>
        </form>
      </div>
    </div>
  )
}
